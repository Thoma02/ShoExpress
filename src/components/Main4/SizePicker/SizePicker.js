import React, { useState } from "react";

export default function SizePicker() {

        const [selectedSize, setSelectedSize] = useState(0);
        const [hoveredSize, setHoveredSize] = useState(null);

        const changeClass = (i) => {
            if (selectedSize === i) {
                return "selected";
            } else if (hoveredSize === i) {
                return "hovered";
            } else {
                return "";
            }
        }

        const sizes = [
            { number: 41 },
            { number: 42 },
            { number: 43 },
            { number: 44 },
        ];


    return(
        <div id="size-selectors">
            {sizes.map((size, i) => (
                <div
                    id={`size-${i}`}
                    className={`size-option ${changeClass(i)}`}
                    onClick={() => setSelectedSize(i)}
                    onMouseOver={() => setHoveredSize(i)}
                    onMouseOut={() => setHoveredSize(null)}
                >
                    <p>{size.number}</p>
                </div>
            ))}
        </div>
    )
}