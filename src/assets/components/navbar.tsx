import logo from "../logo.png"
import {useState} from "react"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"

export function Navbar() {
    const [navs, setNavs] = useState("1000")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setNavTheme(navs)
    }, [navs])

    const navigate = useNavigate();

    function setNavTheme(colorCode: string) {
        for (let i = 0; i < colorCode.length; i++) {
            if (colorCode[i] === "1") {
                document.getElementById(`nav-${i}`)?.classList.add("text-bandit-orange")
            }
            else {
                document.getElementById(`nav-${i}`)?.classList.remove("text-bandit-orange")
            }
        }
    }

    function handleViewAbout() {
        setNavs("0100")
        setMobileMenuOpen(false)
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }

    function handleViewRoadmap() {
        setNavs("0010")
        setMobileMenuOpen(false)
        document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })
    }

    function handleViewCommunity() {
        setNavs("0001")
        setMobileMenuOpen(false)
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }

    function handleViewHome() {
        setNavs("1000")
        setMobileMenuOpen(false)
        navigate("/")
    }

    return (
        <div className="relative">
            <div className="flex items-center justify-between font-bandit text-bandit-text text-xl sticky top-0 z-50 gap-2 bg-bandit-bg md:px-4 md:flex-row lg:flex-row md:text-2xl lg:px-8 lg:text-4xl gap-1">
                <img src={logo} className="w-1/8 rounded-4xl" alt="Hooded Bandits logo" />

                <button id="nav-0" onClick={handleViewHome} className="hidden md:flex lg:flex">
                    Home
                </button>

                <button id="nav-1" onClick={handleViewAbout} className="cursor-pointer hidden md:flex lg:flex">
                    About
                </button>

                <button id="nav-2" onClick={handleViewRoadmap} className="cursor-pointer hidden md:flex lg:flex">
                    Roadmap
                </button>

                <button id="nav-3" onClick={handleViewCommunity} className="hidden md:flex lg:flex cursor-pointer">
                    Community
                </button>

                <button className="hidden md:flex flex-row gap-2 items-center border-solid border border-bandit-orange text-bandit-orange p-2 rounded-lg">
                    <p> COMING SOON </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0,0,256,256">
                        <g fill="#f15a24" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none">
                            <g transform="scale(5.12,5.12)">
                                <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM19,15c4,5 1,10 1,10h-7zM41,29l-2.895,1.447c-0.708,0.354 -1.246,0.974 -1.496,1.725v0c-0.961,2.883 -3.659,5.828 -6.698,5.828h-9.123c-4.551,0 -8.491,-4.161 -9.478,-8.603l-0.31,-1.397h8c0,1.657 1.343,3 3,3h3v-4h-3c5,-7 -1,-14 -1,-14c0,0 1.798,0.559 4,1.244v-2.244c0,-0.553 0.447,-1 1,-1c0.553,0 1,0.447 1,1v2.867c11,6.533 3,12.133 3,12.133h-3v4h3.242c0.494,0 0.977,-0.146 1.388,-0.42l2.37,-1.58l7,-2z"></path>
                            </g>
                        </g>
                    </svg>
                </button>

                <div className="ml-auto flex items-center gap-2 md:hidden">
                    <a
                        href="https://x.com/hoodroguesNFT"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="X"
                        className="inline-flex h-8 w-8 items-center justify-center text-bandit-orange transition-transform duration-200 hover:scale-110"
                    >
                        <svg
                            className="h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            aria-hidden="true"
                        >
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                    </a>

                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-bandit-orange/80 bg-bandit-orange/5 p-2 text-bandit-orange shadow-sm shadow-bandit-orange/20 transition-transform duration-200 hover:scale-105"
                    >
                        <span className={`block h-0.5 w-6 rounded-full bg-current transition-all ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-6 rounded-full bg-current transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 rounded-full bg-current transition-all ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden absolute inset-x-0 top-full z-50 border-t border-bandit-orange/40 bg-bandit-bg/95 p-3 shadow-lg backdrop-blur-sm">
                    <div className="flex flex-col gap-2">
                        <button onClick={handleViewHome} className="w-full rounded-md border border-bandit-orange px-3 py-2 text-left text-bandit-orange">
                            Home
                        </button>

                        <button onClick={handleViewAbout} className="w-full rounded-md border border-bandit-orange px-3 py-2 text-left text-bandit-orange">
                            About
                        </button>

                        <button onClick={handleViewRoadmap} className="w-full rounded-md border border-bandit-orange px-3 py-2 text-left text-bandit-orange">
                            Roadmap
                        </button>

                        <button onClick={handleViewCommunity} className="w-full rounded-md border border-bandit-orange px-3 py-2 text-left text-bandit-orange">
                            Community
                        </button>

                        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-bandit-orange px-3 py-2 text-bandit-orange">
                            <span>COMING SOON</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0,0,256,256">
                                <g fill="#f15a24" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none">
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM19,15c4,5 1,10 1,10h-7zM41,29l-2.895,1.447c-0.708,0.354 -1.246,0.974 -1.496,1.725v0c-0.961,2.883 -3.659,5.828 -6.698,5.828h-9.123c-4.551,0 -8.491,-4.161 -9.478,-8.603l-0.31,-1.397h8c0,1.657 1.343,3 3,3h3v-4h-3c5,-7 -1,-14 -1,-14c0,0 1.798,0.559 4,1.244v-2.244c0,-0.553 0.447,-1 1,-1c0.553,0 1,0.447 1,1v2.867c11,6.533 3,12.133 3,12.133h-3v4h3.242c0.494,0 0.977,-0.146 1.388,-0.42l2.37,-1.58l7,-2z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}