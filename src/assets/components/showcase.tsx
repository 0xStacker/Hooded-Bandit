import demo1 from "../demo1.png";
import demo2 from "../demo2.webp";
import demo3 from "../demo3.webp";
import demo4 from "../demo4.webp";
import demo5 from "../demo5.webp";
import demo6 from "../demo6.webp";
import demo7 from "../demo7.webp";
import demo8 from "../demo8.webp";
import demo from "../demo.png";

export function Showcase() {

    return(
        <div className="flex flex-col font-bandit text-bandit-text font-stretch-expanded"> 
        <p className="text-3xl text-bandit-orange font-bandit text-center m-4">ABOUT</p>
        <div className="grid grid-cols-3 gap-2 m-4 border-solid border border-hood-purple rounded-md p-4 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 lg:p-20">
            <img src={demo1} className="rounded-md" alt="Hooded Bandits demo 1" />
            <img src={demo2} className="rounded-md" alt="Hooded Bandits demo 2" />
            <img src={demo3} className="rounded-md" alt="Hooded Bandits demo 3" />
            <img src={demo4} className="rounded-md" alt="Hooded Bandits demo 4" />
            <img src={demo5} className="rounded-md" alt="Hooded Bandits demo 5" />
            <img src={demo6} className="rounded-md" alt="Hooded Bandits demo 6" />
            <img src={demo7} className="rounded-md" alt="Hooded Bandits demo 7" />
            <img src={demo8} className="rounded-md" alt="Hooded Bandits demo 8" />
            <img src={demo} className="rounded-md md:hidden lg:hidden" alt="Hooded Bandits demo" />
        </div>
        <p className="text-2xl text-justify text-hood-purple text-center m-4 md:text-3xl lg:text-4xl">
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
            Their numbers grew, and their legend spread. They became known as the Hooded Bandits.
        </p>
        </div>
        )
}