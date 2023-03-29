import React, {useState} from "react";

export default function Button3() {

    const [hovered, setHovered] = useState(false)

    const blueArrow = "./assets/main5-icons/vector.svg";
    const whiteArrow = "./assets/main1-btn/vector.svg";

    const handleMouseOver = () => hovered ? whiteArrow : blueArrow;
     
    return (
        <div id="main5-button"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <p>Sign up for free now</p>
            <img className="shoe-image-angles" src={`${handleMouseOver()}`} alt=""/>
        </div>
    )
}