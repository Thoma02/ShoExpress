import React, {useState} from "react";

export default function Favourite() {

    const [favourited, setFavourited] = useState(false);
    const [hovered, setHovered] = useState(false);

    const setSrc = () => {
        switch (true) {
          case favourited:
            return "./assets/main4-icons/heart-red.svg";
          case hovered:
            return "./assets/main4-icons/heart-red.svg";
          default:
            return "./assets/main4-icons/heart-blue.svg";
        }
    };

    return(
        <div id="favourite"
            onClick={() => setFavourited(!favourited)}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <img id="heart-fav" src={`${setSrc()}`} alt=""/>
        </div>
    )
}