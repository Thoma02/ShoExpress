import React from "react";
import ColorPicker from "./ColorPicker/ColorPicker";
import Counter from "./Counter/Counter";
import SizePicker from "./SizePicker/SizePicker";

export default function Main4(props) {
    return(
        <div id="main4">
            <h1>Our weekly pick</h1>
            <div id="main4-container">
                <div id="main4-image-container">
                <img src={props.imageSrc} alt=""/>
            </div>
            <div id="info">
                <h2 id="shoe-name">Nike- The Joyride</h2>
                <p id="shoe-price" class="blue-text">{props.imagePrice}</p>
                <div id="interactive">
                    <div id="colour">
                        <h3>Colour</h3>
                        <ColorPicker/>
                        <Counter />
                    </div>
                    <div id="size">
                        <h3>Size</h3>
                        <SizePicker />
                    <div id="favourite">
                        <img src="./assets/main4-icons/heart-blue.svg" alt=""/>
                    </div>
                </div>
                    <div id="reviews">
                    <h3>Reviews</h3>
                    <div id="hearts">
                        <img id="heart-default" class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                    </div>
                    </div>
                </div>
                <div id="photos">
                    <img class="shoe-image-angles" src="./assets/main4-images/image20.svg" alt=""/>
                    <img class="shoe-image-angles" src="./assets/main4-images/image21.svg" alt=""/>
                    <img class="shoe-image-angles" src="./assets/main4-images/image23.svg" alt=""/>
                </div>
                <button>Buy It Now!</button>
                </div>
            </div>
        </div>
    )
}