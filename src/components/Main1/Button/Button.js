import React, { useState } from "react";

export default function Button() {

    const [hovered, setHovered] = useState(false)

    const blueArrow = "./assets/main5-icons/vector.svg";
    const whiteArrow = "./assets/main1-btn/vector.svg";

    const handleMouseOver = () => hovered ? blueArrow : whiteArrow;

    return (
        <div className="button"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <p>Shop Now</p>
            <img class="shoe-image-angles" src={`${handleMouseOver()}`} alt=""/>
        </div>
    )
}