import heroImage from "../hero.png"

export function Hero() {
    return(
        <div className="font-bandit text-bandit-text font-stretch-expanded">
            <img src={heroImage} alt="Hooded Bandits hero artwork" />
            <div className="flex flex-row gap-2">
 <button className="bg-bandit-orange py-2 px-4 cursor-pointer text-bandit-text p-4 m-2 rounded-md md:text-2xl lg:text-3xl">
                VIEW COLLECTION
            </button>
            <button className="bg-bandit-orange cursor-pointer text-bandit-textS py-2 px-4 m-2 rounded-md md:text-2xl lg:text-3xl">
                JOIN THE CREW
            </button>
            </div>
           
        </div>
    )
}