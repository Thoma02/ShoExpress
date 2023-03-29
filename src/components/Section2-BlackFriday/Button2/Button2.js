import React, { useState } from "react";

export default function Button2() {

    const [hovered, setHovered] = useState(false)

    const blueArrow = "./assets/main5-icons/vector.svg";
    const whiteArrow = "./assets/main1-btn/vector.svg";

    const handleMouseOver = () => hovered ? blueArrow : whiteArrow;

    return (
        <div className="btn2"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <p>Shop Now</p>
            <img className="shoe-image-angles" src={`${handleMouseOver()}`} alt=""/>
        </div>
    )
}