import { useState } from "react"

export default function Main3() {
    
    const handleClick = () => {
        console.log("click")
    }

    return(
        <div id="main3">
            <div id="selector">
                <h1>Popular right now</h1>
                <div id="shoe-button-container">
                <div id="sneakers" class="shoe-button" onClick={handleClick}>Sneakers</div>
                <div id="sports" class="shoe-button">Sports Shoes</div>
                <div id="oxford" class="shoe-button">Oxford</div>
                <div id="sale" class="shoe-button">Sale</div>
                </div>
            </div>
            <div id="shoe-slider-container">
                <h2>New Arrival</h2>
                <div id="shoe-slider">
                    <img id="zoom-x" class="shoes-sale-image" src="./assets/main2-shoe-slider/zoom-x.svg" alt=""/>
                    <img id="rosche-racer-x" class="shoes-sale-image" src="./assets/main2-shoe-slider/rosche-racer.svg" alt=""/>
                    <img id="porter-japan" class="shoes-sale-image" src="./assets/main2-shoe-slider/porter-japan.svg" alt=""/>
                    <img id="sun-air-max" class="shoes-sale-image" src="./assets/main2-shoe-slider/sun-air-max.svg" alt=""/>
                    <img id="li-ning" class="shoes-sale-image" src="./assets/main2-shoe-slider/li-ning.svg" alt=""/>
                    <img id="the-joyride" class="shoes-sale-image" src="./assets/main2-shoe-slider/the-joyride.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}