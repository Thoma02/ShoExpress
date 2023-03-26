import React, {useState} from "react";
import "../../../App.css";

export default function Rate() {

    const [clickedHeart, setclickedHeart] = useState(false);

    const handleMouseOver = (id) => {
        if(!clickedHeart) {
          for (let i = 1; i <= id; i++) {
            const img = document.getElementById(`heart-${i}`);
            img.src = './assets/main4-icons/heart-red.svg';
          }
        }
      };

    const handleMouseOut = () => {
        if(!clickedHeart) {
            for (let i = 2; i <= 5; i++) {
                const img = document.getElementById(`heart-${i}`);
                img.src = './assets/main4-icons/heart-transparent.svg';
              }
        }
    }

    const handleClick = (id) => {
        if(!clickedHeart) {
            setclickedHeart(true);
            for (let i = 1; i <= id; i++) {
                const img = document.getElementById(`heart-${i}`);
                img.src = './assets/main4-icons/heart-red.svg';
            }
        } else {
            for (let i = 1; i <= id; i++) {
                const img = document.getElementById(`heart-${i}`);
                img.src = './assets/main4-icons/heart-red.svg';
            }
            for (let i = id + 1; i <= 5; i++) {
                const img = document.getElementById(`heart-${i}`);
                img.src = './assets/main4-icons/heart-transparent.svg';
            }
        }
    }

    return(
        <div id="hearts">
            <img id="heart-1" class="heart" src="./assets/main4-icons/heart-red.svg" alt=""
                onClick={() => handleClick(1)}
                onMouseOver={() => handleMouseOver(1)}
                onMouseOut={() => handleMouseOut()}
            />
            <img id="heart-2" class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""
                onClick={() => handleClick(2)}
                onMouseOver={() => handleMouseOver(2)}
                onMouseOut={() => handleMouseOut()}
            />
            <img id="heart-3" class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""
                onClick={() => handleClick(3)}
                onMouseOver={() => handleMouseOver(3)}
                onMouseOut={() => handleMouseOut()}
            />
            <img id="heart-4" class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""
                onClick={() => handleClick(4)}
                onMouseOver={() => handleMouseOver(4)}
                onMouseOut={() => handleMouseOut()}
            />
            <img id="heart-5" class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""
                onClick={() => handleClick(5)}
                onMouseOver={() => handleMouseOver(5)}
                onMouseOut={() => handleMouseOut()}
            />
        </div>
    )
}