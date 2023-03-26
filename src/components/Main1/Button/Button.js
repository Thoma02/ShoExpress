import React, {useState} from "react";
import '../../../styles/App.css';

export default function Button() {
    const button = document.querySelector("#btn1-src");

    function handleMouseOver() {
        button.src = "./assets/main5-icons/vector.svg";
        console.log(button.src);
    }

    function handleMouseOut() {
        button.src = "./assets/main1-btn/vector.svg";
        console.log(button.src);
    }

    return (
        <div id="btn1" class="button"
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
        >
            <p>Shop Now</p>
            <img id="btn1-src" src="./assets/main1-btn/vector.svg" alt=""/>
        </div>
    )
}