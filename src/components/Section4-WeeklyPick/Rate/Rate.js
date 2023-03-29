import React, { useState } from "react";

export default function Rate() {

    const [hoveredHeart, setHoveredHeart] = useState(null);
    const [selectedHeart, setSelectedHeart] = useState(1);

    const redHeart = './assets/main4-icons/heart-red.svg';
    const transparentHeart = './assets/main4-icons/heart-transparent.svg';

    const changeSrc = (id) => {
        if (selectedHeart >= id) {
        return redHeart;
        } else if (hoveredHeart >= id) {
        return redHeart;
        } else {
        return transparentHeart;
        }
    }

    const handleClick = (id) => {
        setSelectedHeart(id);
    }

    return(
        <div id="hearts">
            <img id="heart-1" class="heart" src={`${changeSrc(1)}`} alt=""
                onClick={() => handleClick(1)}
                onMouseOver={() => setHoveredHeart(1)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-2" class="heart" src={`${changeSrc(2)}`} alt=""
                onClick={() => handleClick(2)}
                onMouseOver={() => setHoveredHeart(2)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-3" class="heart" src={`${changeSrc(3)}`} alt=""
                onClick={() => handleClick(3)}
                onMouseOver={() => setHoveredHeart(3)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-4" class="heart" src={`${changeSrc(4)}`} alt=""
                onClick={() => handleClick(4)}
                onMouseOver={() => setHoveredHeart(4)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-5" class="heart" src={`${changeSrc(5)}`} alt=""
                onClick={() => handleClick(5)}
                onMouseOver={() => setHoveredHeart(5)}
                onMouseOut={() => setHoveredHeart(null)}
            />
        </div>
    )
}
