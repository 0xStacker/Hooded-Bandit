import { Collection } from "./assets/components/collection";
import { Contact } from "./assets/components/contact";
import { Footer } from "./assets/components/footer";
import { Hero } from "./assets/components/hero";
import { Navbar } from "./assets/components/navbar";
import { Roadmap } from "./assets/components/roadmap";
import { Showcase } from "./assets/components/showcase";

export function App(){
    return(
        <>
        <div className="bg-bandit-bg p-4 md:px-12 md:py-4 lg:px-12 lg:py-4">
        <Navbar />
        <Hero />
        <Collection />
        <Showcase />
        <Roadmap />
        <Contact />
        </div>
        <div className="flex flex-col bg-[#070A18]">
        <hr className="text-bandit-text w-full "></hr>
         <Footer />
        </div>

        </>)
}