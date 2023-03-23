// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const slider = document.querySelector("#shoe-slider-container");
const slider = document.querySelector("#shoe-slider");

// let isPressed = false;
// let cursorX;

// slider.addEventListener("mouseclick", (e) => {
//     isPressed = true;
//     cursorX = e.offsetX - shoeContainer.offsetLeft;
//     slider.style.cursor = "grabbing";
// });

// slider.addEventListener("mousemove", (e) => {
//     if (!isPressed) return;
//     e.preventDefault();
//     shoeContainer.style.left = `${e.offsetX - cursorX}px`
// });

const sneakers = document.getElementById("sneakers");
const sports = document.getElementById("sports");
const oxford = document.getElementById("oxford");
const sale = document.getElementById("sale");

const sliderStyles = getComputedStyle(slider, null);

sneakers.addEventListener("click", () => {
    slider.style.left = 0
})

sports.addEventListener("click", () => {
    console.log(sliderStyles.left)
    slider.style.left = "-1204px"
})
console.log(sports)

oxford.addEventListener("click", () => {
    console.log(sliderStyles.left)
    slider.style.left = "-1806px"
})
// 577 + 25 + 577 = 1204 + 602px = 1806px + 602px

sale.addEventListener("click", () => {
    console.log(sliderStyles.left)
    slider.style.left = "-2408px"
})





