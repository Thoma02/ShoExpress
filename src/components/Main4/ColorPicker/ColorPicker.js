import React, { useState } from "react";
import '../../../App.css'

export default function ColorPicker() {

    const [clickedRed, setClickedRed] = useState(false);
    const [clickedBlack, setClickedBlack] = useState(true);

    const red = document.querySelector("#red");
    const black = document.querySelector("#black");

    const boxShadowRed = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(246,131,95) 0px 0px 0px 7px";
    const boxShadowBlack = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(18, 18, 18) 0px 0px 0px 7px";
    const boxShadowBlue = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13, 153, 255) 0px 0px 0px 7px";

    const handleMouseOver = (color) => {
        if(!clickedRed && color === "red") {
            red.style.boxShadow = boxShadowBlue;
        } else if(!clickedBlack && color === "black") {
            black.style.boxShadow = boxShadowBlue;
        }
    }

    const handleMouseOut = (color) => {
        if(!clickedRed && color === "red") {
            red.style.boxShadow = boxShadowRed;
        } else if(!clickedBlack && color === "black") {
            black.style.boxShadow = boxShadowBlack;
        }
    }

    const handleClick = (redBoolean, blackBoolean) => {
        if(redBoolean === true) {
            setClickedRed(true);
            setClickedBlack(false);
            red.style.boxShadow = boxShadowBlue;
            black.style.boxShadow = boxShadowBlack;
        } else if(blackBoolean === true) {
            setClickedRed(false);
            setClickedBlack(true);
            red.style.boxShadow = boxShadowRed;
            black.style.boxShadow = boxShadowBlue;
        } 
    }

    return(
        <div id="colour-selectors">
            <div id="black" 
            onClick={() => handleClick(false, true)}    
            onMouseOver={() => handleMouseOver("black")}
            onMouseOut={() => handleMouseOut("black")}        
            >
            </div>
            <div id="red" 
            onClick={() => handleClick(true, false)}
            onMouseOver={() => handleMouseOver("red")}
            onMouseOut={() => handleMouseOut("red")}
            >
            </div>
        </div>
    )
}



