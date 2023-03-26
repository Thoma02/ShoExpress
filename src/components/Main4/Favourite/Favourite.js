import React, {useState} from "react";
// import "../../../App.css";

export default function Favourite() {

    const [clickedHeart, setclickedHeart] = useState(false);
    const heart = document.querySelector('#heart-fav');

    const handleMouseOver = () => {
        if(!clickedHeart) {
            heart.src = "./assets/main4-icons/heart-red.svg"
        }
    }

    const handleMouseOut = () => {
        if(!clickedHeart) {
            heart.src = "./assets/main4-icons/heart-blue.svg"
        }
    }

    const handleClick = () => {
        if(!clickedHeart) {
            setclickedHeart(true);
            heart.src = "./assets/main4-icons/heart-red.svg"
        } else if(clickedHeart) {
            setclickedHeart(false);
            heart.src = "./assets/main4-icons/heart-blue.svg"
        }
    }

    return(
        <div id="favourite"
            onClick={() => handleClick()}
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
        >
            <img id="heart-fav" src="./assets/main4-icons/heart-blue.svg" alt=""/>
        </div>
    )
}