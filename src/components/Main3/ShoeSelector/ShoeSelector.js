import React, { useState } from "react";

export default function ShoeSelector() {
    const [hovered, setHovered] = useState(null);

    function handleMouseOver(i) {
            setHovered(i);
    }

    const handleMouseOut = () => setHovered(null);

    const shoeButton = [
        {title: "Sneakers"},
        {title: "Sports Shoes"},
        {title: "Oxford"},
        {title: "Sale"},
    ]

    return (
        <div id="selector">
            <h1>Popular right now</h1>
            <div id="shoe-button-container">
                {shoeButton.map((button, i) => (
                    <div id={`shoeButton-${i}`} className={`shoe-button ${hovered === i ? "hovered" : ""}`}
                    onMouseOver={() => handleMouseOver(i)}
                    onMouseOut={() => handleMouseOut()}
                    >{button.title}</div>
                ))}
            </div>
        </div>
    )
}