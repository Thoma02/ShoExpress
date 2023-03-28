import React, { useState } from "react";

export default function ColorPicker() {

    const [clicked, setClicked] = useState(0);
    const [hovered, setHovered] = useState(null);

    const changeClass = (color) => {
        if (clicked === color) {
            return "selected";
        } else if (hovered === color) {
            return "hovered";
        } else {
            return null;
        }
    }

    return(
        <div id="colour-selectors">
            <div className={`black ${changeClass(0)}`}
                onClick={() => setClicked(0)} 
                onMouseOver={() => setHovered(0)}
                onMouseOut={() => setHovered(null)}          
            >
            </div>
            <div className={`red ${changeClass(1)}`}
                onClick={() => setClicked(1)}   
                onMouseOver={() => setHovered(1)}
                onMouseOut={() => setHovered(null)}
            >
            </div>
        </div>
    )
}



