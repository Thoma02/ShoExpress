import React, { useState } from "react"
import ShoeSelector from "./ShoeSelector/ShoeSelector"
import Main4 from "../Main4/Main4"

export default function Main3() {
    
    const [imageSrc, setImageSrc] = useState("./assets/main2-shoe-slider/the-joyride.svg")
    const [imagePrice, setImagePrice] = useState("$390")

    const handleClick = (url, price) => {
        setImageSrc(url)
        setImagePrice(price)
    }

    return(
        <>
            <div id="main3">
                <ShoeSelector />
                <div id="shoe-slider-container">
                    <h2>New Arrival</h2>
                    <div id="shoe-slider">
                        <img id="zoom-x" class="shoes-sale-image" src="./assets/main2-shoe-slider/zoom-x.svg" alt="" onClick={() => handleClick('./assets/main2-shoe-slider/zoom-x.svg', "$200")}/>
                        <img id="rosche-racer-x" class="shoes-sale-image" src="./assets/main2-shoe-slider/rosche-racer.svg" alt="" onClick={() => handleClick('./assets/main2-shoe-slider/rosche-racer.svg', "$150")}/>
                        <img id="porter-japan" class="shoes-sale-image" src="./assets/main2-shoe-slider/porter-japan.svg" alt="" onClick={() => handleClick('./assets/main2-shoe-slider/porter-japan.svg', "$150")}/>
                        <img id="sun-air-max" class="shoes-sale-image" src="./assets/main2-shoe-slider/sun-air-max.svg" alt="" onClick={() => handleClick('./assets/main2-shoe-slider/sun-air-max.svg', "$300")}/>
                        <img id="li-ning" class="shoes-sale-image" src="./assets/main2-shoe-slider/li-ning.svg" alt="" onClick={() => handleClick('./assets/main2-shoe-slider/li-ning.svg', "$190")}/>
                        <img id="the-joyride" class="shoes-sale-image" src="./assets/main2-shoe-slider/the-joyride.svg" alt="" onClick={() => handleClick('./assets/main2-shoe-slider/the-joyride.svg', "$390")}/>
                    </div>
                </div>
            </div>
            <Main4 imageSrc = {imageSrc} imagePrice = {imagePrice}/>
        </>
    )
}