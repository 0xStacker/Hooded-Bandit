import { useState } from "react";
import divider from "../divider.png";

type SubmissionStatus = "idle" | "submitting" | "success" | "invalid_wallet" | "already_registered" | "error";

interface ApiResponse {
  message?: string;
  error?: string;
}

export function Form() {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    // Reset previous messages
    setErrorMessage("");

    // Client-side validation
    if (!walletAddress.trim()) {
      setStatus("invalid_wallet");
      setErrorMessage("Please enter a wallet address.");
      return;
    }

    // Basic regex validation for EVM address
    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setStatus("invalid_wallet");
      setErrorMessage("Please enter a valid Ethereum wallet address (0x...).");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wallet: walletAddress,
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      
      let data: ApiResponse;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (parseError) {
        console.error("Failed to parse response JSON:", parseError);
        data = {};
      }

      if (response.status === 201) {
        // Success
        console.log("Setting status to success");
        setStatus("success");
        setWalletAddress("");
      } else if (response.status === 409) {
        // Already registered
        setStatus("already_registered");
        setErrorMessage("This wallet is already on the waitlist.");
      } else if (response.status === 400) {
        // Invalid wallet or malformed request
        setStatus("invalid_wallet");
        setErrorMessage(data.error || "Invalid wallet address.");
      } else if (response.status === 405) {
        // Method not allowed
        setStatus("error");
        setErrorMessage("Server error: invalid request method.");
      } else if (response.status === 503) {
        // Service unavailable / timeout
        setStatus("error");
        setErrorMessage("Server is temporarily unavailable. Please try again in a moment.");
      } else if (response.status === 500) {
        // Server error
        setStatus("error");
        setErrorMessage("Server error. Please try again later.");
      } else {
        // Unknown error
        setStatus("error");
        setErrorMessage(data.error || "An unexpected error occurred.");
      }
    } catch (err) {
      console.error("Failed to submit wallet:", err);
      setStatus("error");
      setErrorMessage("Failed to connect to server. Please check your connection.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && status !== "submitting") {
      handleSubmit();
    }
  };

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  return (
    <>
      <p className="text-3xl text-bandit-orange font-bandit text-center m-4">
        BECOME A ROGUE 🦊
      </p>

      <section
        id="join"
        className="flex flex-col border py-4 items-center gap-4 my-10 border-hood-purple inset-shadow-sm inset-shadow-violet-700/50 rounded-md"
      >
        <div className="flex flex-row gap-2">
          <p className="text-hood-purple text-center font-bandit text-2xl">
            Like 💖 and Retweet 🔁 the campaign{" "}
            <a href="x.com" target="_blank" rel="noreferrer">
              <span className="text-bandit-orange underline">Tweet</span>
            </a>{" "}
            then drop your wallet address below
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-hood-purple font-bandit text-3xl m-2">Countdown</p>
          <p className="text-3xl text-bandit-orange font-bandit">
            00 days 00 hrs 00 mins 00 sec
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-200">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => {
              setWalletAddress(e.target.value);
              // Reset status when user starts typing again
              if (status !== "idle") {
                setStatus("idle");
                setErrorMessage("");
              }
            }}
            onKeyPress={handleKeyPress}
            placeholder="0x00...000"
            disabled={isSubmitting}
            className="rounded-md border border-solid text-bandit-text font-bandit p-2 text-2xl border-bandit-orange md:w-2xl md:p-4 lg:w-3xl lg:p-4 disabled:opacity-50 disabled:cursor-not-allowed"
            id="contact"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled //= {isSubmitting}/
            className="flex flex-row p-2 bg-gray-500 cursor-not-allowed rounded-md items-center gap disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            <p className="text-bandit-text font-bandit text-2xl">
              {isSubmitting ? "Joining..." : "Coming Soon ⌛"}
            </p>
            {/* <svg
              fill="#f5f1e8"
              viewBox="0 0 1000 1000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 1000 1000"
              className="w-10"
              stroke="#f5f1e8"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                    <path d="M740.4,3768.7C87,3543.9-114.7,2648.9,362.2,2102.6c157.6-180.7,413.9-289.9,676.5-289.9c153.4,0,399.2,44.1,472.7,81.9c44.1,25.2,44.1,8.4-29.4,329.9l-10.5,46.2l-124-37.8c-292-92.5-519-69.3-680.7,65.1c-353,292.1-298.3,886.6,98.7,1096.7c117.7,60.9,344.6,63,464.3,4.2c205.9-100.8,413.9-405.5,523.2-766.9c134.5-449.6,615.6-2426.7,819.4-3361.7c199.6-922.4,327.8-1691.3,327.8-1970.8c0-323.6-256.3-535.8-607.2-502.2c-378.2,33.6-632.4,432.8-519,819.4c65.1,222.7,264.7,407.6,464.3,428.6c52.5,6.3,94.5,16.8,94.5,25.2c0,25.2-79.8,340.4-86.1,348.8c-6.3,4.2-50.4,0-98.7-12.6c-296.2-65.1-567.3-321.5-676.5-636.6c-153.4-447.5,16.8-985.4,386.6-1220.7c231.1-145,56.7-136.6,2706.1-136.6c2115.8,0,2401.5,4.2,2470.8,33.6c96.7,39.9,184.9,121.9,235.3,220.6c52.5,100.9,92.5,336.2,77.7,458c-16.8,134.5-416,1878.3-434.9,1899.3c-8.4,10.5-52.5-8.4-96.6-37.8c-46.2-31.5-126.1-79.8-180.7-107.2c-56.7-29.4-96.6-60.9-90.3-77.7c4.2-12.6,94.6-399.2,199.6-855.1c163.9-703.8,191.2-848.8,182.8-956c-8.4-86.1-23.1-132.4-48.3-151.3c-29.4-21-401.3-27.3-1851-27.3c-998,0-1813.2,6.3-1813.2,16.8c0,8.4,18.9,65.1,42,126.1c23.1,60.9,48.3,166,54.6,231.1c48.3,453.8-298.4,2187.2-947.6,4748.4c-224.8,880.3-304.7,1126.1-441.2,1340.5c-39.9,63-73.5,119.8-73.5,124c0,6.3,771.1,10.5,1712.3,10.5h1712.4l79.8-73.5c159.7-142.9,252.1-376.1,371.9-945.5c75.7-355.1,380.3-1691.3,401.3-1756.5c6.3-25.2,54.6,12.6,178.6,140.8l170.2,174.4l-182.8,815.2c-264.7,1178.7-277.3,1235.4-338.3,1388.8c-117.7,296.2-302.6,527.4-497.9,613.5c-86.1,39.9-163.9,42-2346.9,39.9C977.8,3806.5,845.5,3804.5,740.4,3768.7z"></path>
                  </g>
                </g>
              </g>
            </svg> */}
          </button>

          {/* Success Message */}
          {isSuccess && (
            <div className="text-center">
              <p className="text-bandit-green text-center font-bandit text-2xl">
                Thanks for joining the{" "}
                <span className="text-bandit-orange">Rogues!</span>
              </p>
              <p className="text-hood-purple text-xl font-bandit">
                Your wallet has been recorded successfully!
              </p>
            </div>
          )}

          {/* Error Messages */}
          {status === "already_registered" && (
            <div className="text-center">
              <p className="text-bandit-orange font-bandit text-xl">
                {errorMessage}
              </p>
              <p className="text-hood-purple text-sm font-bandit">
                Try a different wallet address if you'd like to add another one.
              </p>
            </div>
          )}

          {status === "invalid_wallet" && (
            <div className="text-center">
              <p className="text-red-500 font-bandit text-xl">{errorMessage}</p>
            </div>
          )}

          {status === "error" && (
            <div className="text-center">
              <p className="text-red-500 font-bandit text-xl">{errorMessage}</p>
              <p className="text-hood-purple text-sm font-bandit">
                Please try again in a moment.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* <img src={divider} alt="section divider" className="mx-auto w-30 " /> */}
    </>
  );
}
