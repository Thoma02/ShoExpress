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

    const hearts = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
    ] 

    return(
        <div id="hearts">
            {hearts.map((heart) => (
                <img 
                    id={`heart-${heart.number}`}
                    className="heart"
                    src={`${changeSrc(heart.number)}`}
                    alt="Heart"
                    onClick={() => handleClick(heart.number)}
                    onMouseOver={() => setHoveredHeart(heart.number)}
                    onMouseOut={() => setHoveredHeart(null)}
                />
            ))}
        </div>
    )
}
