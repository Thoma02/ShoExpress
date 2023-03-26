import React from "react";

export default function Button2() {
    const button = document.getElementById("btn2-src");

    function handleMouseOver() {
        button.src = "./assets/main5-icons/vector.svg";
    }

    function handleMouseOut() {
        button.src = "./assets/main1-btn/vector.svg";
    }

    return (
        <div id="btn2" class="button btn2"
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
        >
            <p>Shop Now</p>
            <img id="btn2-src" src="./assets/main1-btn/vector.svg" alt=""/>
        </div>
    )
}