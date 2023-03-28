import React, { useState } from "react";

export default function Rate() {

    const [hoveredHeart, setHoveredHeart] = useState(null);
    const [selectedHeart, setSelectedHeart] = useState(1);

    const redHeart = './assets/main4-icons/heart-red.svg';
    const transparentHeart = './assets/main4-icons/heart-transparent.svg';

    const changeSrc = (id) => {
        if (selectedHeart >= id) {
        return redHeart;
        } else if (hoveredHeart >= id) {
        return redHeart;
        } else {
        return transparentHeart;
        }
    }

    const handleClick = (id) => {
        setSelectedHeart(id);
    }

    return(
        <div id="hearts">
            <img id="heart-1" class="heart" src={`${changeSrc(1)}`} alt=""
                onClick={() => handleClick(1)}
                onMouseOver={() => setHoveredHeart(1)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-2" class="heart" src={`${changeSrc(2)}`} alt=""
                onClick={() => handleClick(2)}
                onMouseOver={() => setHoveredHeart(2)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-3" class="heart" src={`${changeSrc(3)}`} alt=""
                onClick={() => handleClick(3)}
                onMouseOver={() => setHoveredHeart(3)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-4" class="heart" src={`${changeSrc(4)}`} alt=""
                onClick={() => handleClick(4)}
                onMouseOver={() => setHoveredHeart(4)}
                onMouseOut={() => setHoveredHeart(null)}
            />
            <img id="heart-5" class="heart" src={`${changeSrc(5)}`} alt=""
                onClick={() => handleClick(5)}
                onMouseOver={() => setHoveredHeart(5)}
                onMouseOut={() => setHoveredHeart(null)}
            />
        </div>
    )
}

// const changeSrc = (id) => {
//     console.log(selectedHeart);
//     if (selectedHeart >= id) { // check if heart is selected
//       return redHeart;
//     } else if (hoveredHeart >= id) { // check if heart is hovered
//       return redHeart;
//     } else {
//       return transparentHeart;
//     }
//   }

//   const handleClick = (id) => {
//     setSelectedHeart(id); // update selected heart
//   }

// const handleClick = (id) => {
//     setSelectedHeart(id);
//     console.log(selectedHeart)
//     for(i = 1; i <= id; i++) {
//         return redHeart;
//     }
// }

// import React, { useState } from "react";

// export default function Rate() {
//     const [hoveredHeart, setHoveredHeart] = useState(0);

//     const hearts = [
//         { id: 1, src: './assets/main4-icons/heart-red.svg' },
//         { id: 2, src: './assets/main4-icons/heart-transparent.svg' },
//         { id: 3, src: './assets/main4-icons/heart-transparent.svg' },
//         { id: 4, src: './assets/main4-icons/heart-transparent.svg' },
//         { id: 5, src: './assets/main4-icons/heart-transparent.svg' }
//     ];

//     const changeSrc = (id) => {
//         let newHearts = [...hearts];
//         for (let i = 0; i < newHearts.length; i++) {
//             if (newHearts[i].id <= id) {
//                 newHearts[i].src = './assets/main4-icons/heart-red.svg';
//             } else {
//                 newHearts[i].src = './assets/main4-icons/heart-transparent.svg';
//             }
//         }
//         return newHearts;
//     }

//     return (
//         <div id="hearts">
//             {hearts.map((heart) => (
//                 <img
//                     id={`heart-${heart.id}`}
//                     className="heart"
//                     src={heart.src}
//                     alt=""
//                     onMouseOver={() => setHoveredHeart(heart.id)}
//                     onMouseOut={() => setHoveredHeart(null)}
//                 />
//             ))}
//         </div>
//     );
// }

// for (let i = 1; i <= id; i++) {
//     const img = document.getElementById(`heart-${i}`);
//     img.src = redHeart;
//   }

// for (let i = 2; i <= 5; i++) {
//     const img = document.getElementById(`heart-${i}`);
//     img.src = transparentHeart;
//   }

// const handleClick = (id) => {
//     if(!clickedHeart) {
//         setclickedHeart(true);
//         for (let i = 1; i <= id; i++) {
//             const img = document.getElementById(`heart-${i}`);
//             img.src = redHeart;
//         }
//     } else {
//         for (let i = 1; i <= id; i++) {
//             const img = document.getElementById(`heart-${i}`);
//             img.src = redHeart;
//         }
//         for (let i = id + 1; i <= 5; i++) {
//             const img = document.getElementById(`heart-${i}`);
//             img.src = transparentHeart;
//         }
//     }
// }

// const handleMouseOver = () => !hoveredHeart ? setHoveredHeart(true) : setHoveredHeart(false);

// const handleMouseOut = () => setHoveredHeart(false);
