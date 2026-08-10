import logo from "../logo.png"

export function Navbar() {
    return (
        <div className="flex items-center font-bandit text-bandit-text text-xl sticky top-0 z-50 gap-2 bg-bandit-bg md:px-4 md:flex-row justify-around lg:flex-row  md:text-2xl lg:px-8 lg:text-4xl gap-1">
            <img src={logo} className="w-1/8 rounded-4xl" alt="Hooded Bandits logo" />
            <a className="hidden md:flex lg:flex">
                Home
            </a>
            
            <a className="hidden md:flex lg:flex">
                About
            </a>
<a className="hidden md:flex lg:flex">
                Roadmap
            </a>
            
            <a className="hidden md:flex lg:flex">
                Faq
            </a>
            <a className="border-solid border border-bandit-orange text-bandit-orange p-2 rounded-lg">
                VIEW COLLECTION
            </a>
        </div>
    )
}