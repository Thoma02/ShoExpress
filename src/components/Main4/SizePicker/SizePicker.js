import React, { useState } from "react";

export default function SizePicker() {

        const [selectedSize, setSelectedSize] = useState(0);
      
        const handleClick = (size) => setSelectedSize(size);

        const changeClass = (size) => selectedSize === size ? "selected" : "";

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
                    onClick={() => handleClick(i)}
                >
                    <p>{size.number}</p>
                </div>
            ))}
        </div>
    )
}