import logo from "../logo.png"

export function Footer(){
    return (
        <div className="bg-[#070A18] self-center px-8">
            <div className="flex flex-row gap-3 items-center">
                <img src={logo} className="w-1/8" alt="Hooded Bandits logo" />
                <p className="text-3xl text-bandit-text font-bandit"> ©HoodedBanditsNFT 2026</p></div>
           
        </div>
    )
}