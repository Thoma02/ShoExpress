import React, { useState } from "react";
// import '../../../App.css'

export default function ColorPicker() {

    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);

    const size1 = document.querySelector("#size-1");
    const size2 = document.querySelector("#size-2");
    const size3 = document.querySelector("#size-3");
    const size4 = document.querySelector("#size-4");

    const colorBlue = "#007d8b";
    const colorWhite = "#fff";

    const handleMouseOver = (size) => {
        if(!clicked1 && size === 1) {
            size1.style.color = colorWhite;
            size1.style.backgroundColor = colorBlue;
        } else if(!clicked2 && size === 2) {
            size2.style.color = colorWhite;
            size2.style.backgroundColor = colorBlue;
        } else if(!clicked3 && size === 3) {
            size3.style.color = colorWhite;
            size3.style.backgroundColor = colorBlue;
        } else if(!clicked4 && size === 4) {
            size4.style.color = colorWhite;
            size4.style.backgroundColor = colorBlue;
        }
    }

    const handleMouseOut = (size) => {
        if(!clicked1 && size === 1) {
            size1.style.color = colorBlue;
            size1.style.backgroundColor = colorWhite;
        } else if(!clicked2 && size === 2) {
            size2.style.color = colorBlue;
            size2.style.backgroundColor = colorWhite;
        } else if(!clicked3 && size === 3) {
            size3.style.color = colorBlue;
            size3.style.backgroundColor = colorWhite;
        } else if(!clicked4 && size === 4) {
            size4.style.color = colorBlue;
            size4.style.backgroundColor = colorWhite;
        }
    }

    const handleClick = (size1Boolean, size2Boolean, size3Boolean, size4Boolean) => {
        if(size1Boolean) {
            setClicked1(true);
            setClicked2(false);
            setClicked3(false);
            setClicked4(false);
            size1.style.color = colorWhite;
            size1.style.backgroundColor = colorBlue;
            size2.style.color = colorBlue;
            size2.style.backgroundColor = colorWhite;
            size3.style.color = colorBlue;
            size3.style.backgroundColor = colorWhite;
            size4.style.color = colorBlue;
            size4.style.backgroundColor = colorWhite;
        } else if(size2Boolean) {
            setClicked1(false);
            setClicked2(true);
            setClicked3(false);
            setClicked4(false);
            size2.style.color = colorWhite;
            size2.style.backgroundColor = colorBlue;
            size1.style.color = colorBlue;
            size1.style.backgroundColor = colorWhite;
            size3.style.color = colorBlue;
            size3.style.backgroundColor = colorWhite;
            size4.style.color = colorBlue;
            size4.style.backgroundColor = colorWhite;
        } else if(size3Boolean) {
            setClicked1(false);
            setClicked2(false);
            setClicked3(true);
            setClicked4(false);
            size3.style.color = colorWhite;
            size3.style.backgroundColor = colorBlue;
            size1.style.color = colorBlue;
            size1.style.backgroundColor = colorWhite;
            size2.style.color = colorBlue;
            size2.style.backgroundColor = colorWhite;
            size4.style.color = colorBlue;
            size4.style.backgroundColor = colorWhite;
        } else if(size4Boolean) {
            setClicked1(false);
            setClicked2(false);
            setClicked3(false);
            setClicked4(true);
            size4.style.color = colorWhite;
            size4.style.backgroundColor = colorBlue;
            size1.style.color = colorBlue;
            size1.style.backgroundColor = colorWhite;
            size2.style.color = colorBlue;
            size2.style.backgroundColor = colorWhite;
            size3.style.color = colorBlue;
            size3.style.backgroundColor = colorWhite;
        }
    }

    return(
        <div id="size-selectors">
            <div id="size-1" class="size-option"
                onClick={() => handleClick(true, false, false, false)}
                onMouseOver={() => handleMouseOver(1)}
                onMouseOut={() => handleMouseOut(1)}
            >
                <p>41</p>
            </div>
            <div id="size-2" class="size-option"
                onClick={() => handleClick(false, true, false, false)}
                onMouseOver={() => handleMouseOver(2)}
                onMouseOut={() => handleMouseOut(2)}
            >
                <p>42</p>
            </div>
            <div id="size-3" class="size-option"
                onClick={() => handleClick(false, false, true, false)}
                onMouseOver={() => handleMouseOver(3)}
                onMouseOut={() => handleMouseOut(3)}
            >
                <p>43</p>
            </div>
            <div id="size-4" class="size-option"
                onClick={() => handleClick(false, false, false, true)}
                onMouseOver={() => handleMouseOver(4)}
                onMouseOut={() => handleMouseOut(4)}
            >
                <p>44</p>
            </div>
        </div>
    )
}