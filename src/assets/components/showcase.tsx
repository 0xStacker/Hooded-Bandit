
import demo9 from "../h100.png";
import demo10 from "../h100_2.png";
import divider from "../divider.png";
import { useEffect, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function Showcase() {
    const images = [demo9, demo10];
    const [currentIndex, setCurrentIndex] = useState(0);
    const revealRef = useScrollReveal<HTMLElement>();

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    return(
        <section id="about" ref={revealRef} className="scroll-reveal">
             <img src={divider} alt="section divider" className="mx-auto w-30 " />
            <div className="flex flex-col font-bandit text-bandit-text font-stretch-expanded"> 
                <p className="text-3xl text-bandit-orange m-0 font-bandit text-center">MEET THE ROGUES</p>
               <div className="flex flex-col justify-center items-center mx-auto m-4 lg:grid grid-cols-2 lg:items-start">
                <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto m-4 border-solid border border-hood-purple rounded-md md:p-8 lg:max-w-2xl scroll-reveal-item">
                    <img
                        src={images[currentIndex]}
                        className="rounded-md border border-solid border-hood-purple max-w-full h-auto mx-auto"
                        alt="Sample image; may not be part of the actual collection"
                    />
                    <p className="text-sm text-center text-bandit-orange mt-3">
                        Sample images only; may not be part of the actual collection.
                    </p>
                </div>
  

                <p className="text-2xl text-justify text-hood-purple text-center m-4 md:text-3xl lg:text-4xl scroll-reveal-item">
                    The nobles called them criminals.
                    The guards called them terrorists.
                    The people called them heroes.
                    Nobody knew who they were, but everyone knew what they did.

                    Some were thieves.
                    Some were Mercenaries.
                    Some were outcasts.
                    Some were simply just tired of watching the city burn.
                    But they shared one rule:
                    <span className="text-bandit-orange"> Never steal from someone who has nothing.</span>
                    Their numbers grew, and their legend spread. They became known as the Hood Rogues.
                </p>
               </div>
                              
  
            </div>
        </section>
    );
}