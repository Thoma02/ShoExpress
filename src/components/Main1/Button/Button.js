import React, { useState } from "react";

export default function Button() {

    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => !hovered ? setHovered(true) : setHovered(false);

    const handleMouseOut = () => setHovered(false);

    return (
        <div className={`button ${hovered ? "hovered" : ""}`}
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
        >
            <p>Shop Now</p>
            <img src={`${hovered ? "./assets/main5-icons/vector.svg" : "./assets/main1-btn/vector.svg"}`} alt=""/>
        </div>
    )
}