export function Showcase() {

    return(
        <div className="flex flex-col font-bandit text-bandit-text font-stretch-expanded"> 
        <p className="text-3xl text-bandit-orange font-bandit text-center m-4">ABOUT</p>
        <div className="grid grid-cols-3 gap-2 m-4 border-solid border border-hood-purple rounded-md p-4 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 lg:p-20">
            <img src="./src/assets/demo1.png" className="rounded-md"></img>
            <img src="./src/assets/demo2.webp" className="rounded-md"></img>
            <img src="./src/assets/demo3.webp" className="rounded-md"></img>
            <img src="./src/assets/demo4.webp" className="rounded-md"></img>
            <img src="./src/assets/demo5.webp" className="rounded-md"></img>
            <img src="./src/assets/demo6.webp" className="rounded-md"></img>
            <img src="./src/assets/demo7.webp" className="rounded-md"></img>
            <img src="./src/assets/demo8.webp" className="rounded-md"></img>
            <img src="./src/assets/demo.png" className="rounded-md md:hidden lg:hidden"></img>
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