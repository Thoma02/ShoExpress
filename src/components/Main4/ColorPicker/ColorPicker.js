import React, { useState } from "react";
import '../../../App.css'

export default function ColorPicker() {

    const [clickedRed, setClickedRed] = useState(false);
    const [clickedBlack, setClickedBlack] = useState(true);
    const red = document.querySelector("#red");
    const black = document.querySelector("#black");

    const handleMouseOver = (color) => {
        if(!clickedRed && color === "red") {
            red.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13, 153, 255) 0px 0px 0px 7px"
        } else if(!clickedBlack && color === "black") {
            black.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13, 153, 255) 0px 0px 0px 7px";
        }
    }

    const handleMouseOut = (color) => {
        if(!clickedRed && color === "red") {
            red.style.boxShadow ="rgb(255, 255, 255) 0px 0px 0px 4px, rgb(246,131,95) 0px 0px 0px 7px"
        } else if(!clickedBlack && color === "black") {
            black.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(18, 18, 18) 0px 0px 0px 7px";
        }
    }

    const handleClick = (redBoolean, blackBoolean) => {
        if(redBoolean === true) {
            setClickedRed(true);
            setClickedBlack(false);
            red.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px rgb(13,153,255) 0px 0px 0px 7px";
            black.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(18, 18, 18) 0px 0px 0px 7px";
        } else if(blackBoolean === true) {
            setClickedRed(false);
            setClickedBlack(true);
            black.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13,153,255) 0px 0px 0px 7px";
            red.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px rgb(246,131,95) 0px 0px 0px 7px";
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
            ></div>
        </div>
    )
}



