import heroImage from "../hero.png"

export function Hero() {

    function handleJoinCrew() {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    return(
        <div className="font-bandit text-bandit-text font-stretch-expanded">
            <img src={heroImage} alt="Hooded Bandits hero artwork" />
            <div className="flex flex-row gap-2">
 <button className="flex flex-row gap-2 items-center bg-bandit-orange py-2 px-4 cursor-pointer text-bandit-text p-4 m-2 rounded-md md:text-2xl lg:text-3xl">
                VIEW COLLECTION
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM19,15c4,5 1,10 1,10h-7zM41,29l-2.895,1.447c-0.708,0.354 -1.246,0.974 -1.496,1.725v0c-0.961,2.883 -3.659,5.828 -6.698,5.828h-9.123c-4.551,0 -8.491,-4.161 -9.478,-8.603l-0.31,-1.397h8c0,1.657 1.343,3 3,3h3v-4h-3c5,-7 -1,-14 -1,-14c0,0 1.798,0.559 4,1.244v-2.244c0,-0.553 0.447,-1 1,-1c0.553,0 1,0.447 1,1v2.867c11,6.533 3,12.133 3,12.133h-3v4h3.242c0.494,0 0.977,-0.146 1.388,-0.42l2.37,-1.58l7,-2z"></path></g></g>
</svg>
            </button>
            <button onClick={handleJoinCrew} className="bg-bandit-orange cursor-pointer text-bandit-textS py-2 px-4 m-2 rounded-md md:text-2xl lg:text-3xl">
                JOIN THE CREW
            </button>
            </div>
           
        </div>
    )
}