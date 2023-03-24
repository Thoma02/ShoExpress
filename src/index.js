import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//

const slider = document.querySelector("#shoe-slider");


const sneakers = document.getElementById("sneakers");
const sports = document.getElementById("sports");
const oxford = document.getElementById("oxford");
const sale = document.getElementById("sale");

// const sliderStyles = getComputedStyle(slider, null);

sneakers.addEventListener("click", () => {
    slider.style.left = 0
})

sports.addEventListener("click", () => {
    slider.style.left = "-1204px"
})

oxford.addEventListener("click", () => {
    slider.style.left = "-1806px"
})

sale.addEventListener("click", () => {
    slider.style.left = "-2408px"
})


// const blackCircleHover = document.getElementById("black:hover");

// const blackCircle = document.getElementById("black");
// const redCircle = document.getElementById("red");

// const blackCircleStyles = getComputedStyle(blackCircle, null);
// const redCircleStyles = getComputedStyle(redCircle, null);
// console.log(redCircleStyles.boxShadow)
// console.log(blackCircleStyles.boxShadow)

// let clickedRed = false;
// let clickedBlack = true;

// redCircle.addEventListener("mouseover", () => {
//     if (!clickedRed) {
//         redCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13, 153, 255) 0px 0px 0px 7px"
//     }
// })

// redCircle.addEventListener("mouseout", () => {
//     if (!clickedRed) {
//         redCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(246,131,95) 0px 0px 0px 7px"
//     }
// })

// redCircle.addEventListener("click", () => {
//     clickedRed = true;
//     clickedBlack = false;
//     redCircle.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px rgb(13,153,255) 0px 0px 0px 7px"
//     blackCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(18, 18, 18) 0px 0px 0px 7px"
// })

// redCircle.addEventListener("mouseleave", () => {
//     if (clickedRed) {
//         redCircle.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px rgb(13,153,255) 0px 0px 0px 7px"
//     } else {
//         redCircle.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px pxrgb(246,131,95) 0px 0px 0px 7px"
//     }
// })

// //

// blackCircle.addEventListener("mouseover", () => {
//     if (!clickedBlack) {
//         blackCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13, 153, 255) 0px 0px 0px 7px"
//     }
// })

// blackCircle.addEventListener("mouseout", () => {
//     if (!clickedBlack) {
//         blackCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(18, 18, 18) 0px 0px 0px 7px"
//     }
// })

// blackCircle.addEventListener("click", () => {
//     clickedRed = false;
//     clickedBlack = true;
//     redCircle.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px, rgb(246,131,95) 0px 0px 0px 7px"
//     blackCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(13, 153, 255) 0px 0px 0px 7px"
// })

// blackCircle.addEventListener("mouseleave", () => {
//     if (clickedBlack) {
//         blackCircle.style.boxShadow = "rgb(255,255,255) 0px 0px 0px 4px rgb(13,153,255) 0px 0px 0px 7px"
//     } else {
//         blackCircle.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px 4px, rgb(18, 18, 18) 0px 0px 0px 7px"
//     }
// })

const sizeOption = document.getElementsByClassName("size-option");

sizeOption[0].addEventListener("click", () => {
    let i = 1
    console.log(sizeOption[1].style.backgroundColor = "#fff")
    for(i = 1; i < 3; i++) {
        sizeOption[i].style.backgroundColor = "#fff"
        sizeOption[i].style.color = "#007d8b"
    }
})

sizeOption[1].addEventListener("click", () => {
    let i = 1
    for(i = 1; i < 3; i++) {
        sizeOption[i].style.backgroundColor = "#fff"
    }
})









