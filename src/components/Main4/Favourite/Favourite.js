import React, {useState} from "react";

export default function Favourite() {

    const [favourited, setFavourited] = useState(false);
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        if(!favourited) {
            setFavourited(true);
        } else if(!hovered) {
            setHovered(true);
        }
    }

    return(
        <div id="favourite"
            onClick={() => handleClick()}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <img id="heart-fav" src={`${hovered ? "./assets/main4-icons/heart-red.svg" : "./assets/main4-icons/heart-blue.svg"}`} alt=""/>
        </div>
    )
}