import React, { useState } from "react"
import Main4 from "../Main4/Main4"

export default function Main3() {
    
    const [imageSrc, setImageSrc] = useState("./assets/main2-shoe-slider/the-joyride.svg")
    const [imagePrice, setImagePrice] = useState("$390")

    const handleClick = (url, price) => {
        setImageSrc(url)
        setImagePrice(price)
        console.log(imageSrc)
        console.log(imagePrice)
    }

    return(
        <>
            <div id="main3">
                <div id="selector">
                    <h1>Popular right now</h1>
                    <div id="shoe-button-container">
                    <div id="sneakers" class="shoe-button">Sneakers</div>
                    <div id="sports" class="shoe-button">Sports Shoes</div>
                    <div id="oxford" class="shoe-button">Oxford</div>
                    <div id="sale" class="shoe-button">Sale</div>
                    </div>
                </div>
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
            <Main4 imageSrc = {imageSrc} imagePrice={imagePrice}/>
        </>
    )
}