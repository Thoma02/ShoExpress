import React, { useState } from "react";

export default function SizePicker() {

        const [selectedSize, setSelectedSize] = useState(41);
      
        const handleClick = (size) => setSelectedSize(size);

        const changeClass = (size) => selectedSize === size ? "selected" : "";

    return(
        <div id="size-selectors">
            <div
                id="size-1"
                className={`size-option ${changeClass(41)}`}
                onClick={() => handleClick(41)}
            >
                <p>41</p>
            </div>
            <div
                id="size-2"
                className={`size-option ${changeClass(42)}`}
                onClick={() => handleClick(42)}
            >
                <p>42</p>
            </div>
            <div
                id="size-3"
                className={`size-option ${changeClass(43)}`}
                onClick={() => handleClick(43)}
            >
                <p>43</p>
            </div>
            <div
                id="size-4"
                className={`size-option ${changeClass(44)}`}
                onClick={() => handleClick(44)}
            >
                <p>44</p>
            </div>
        </div>
    )
}