import React, { useState } from "react";

export default function Button() {

    const [hovered, setHovered] = useState(false);

    function handleMouseOver() {
        if(!hovered) {
            setHovered(true);
        } else {
            setHovered(false);
        }
    }

    const handleMouseOut = () => setHovered(false);

    return (
        <div className={`button ${hovered ? "hovered" : ""}`}
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
        >
            <p>Shop Now</p>
            <img id="btn1-src" src={`${hovered ? "./assets/main5-icons/vector.svg" : "./assets/main1-btn/vector.svg"}`} alt=""/>
        </div>
    )
}