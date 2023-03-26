import React, { useState } from "react";

export default function Dropdown() {

    // const [display, setDisplay] = useState(false);
    // const dropdown = document.querySelector("#dropdown");
    // console.log(dropdown);
  
    // function handleClick() {
    //   console.log(dropdown.style)
    //   if(!display) {
    //     setDisplay(true);
    //     dropdown.style.animation = "slide-in 1s";
    //     dropdown.style.left = 0;
    //   } else {
    //     setDisplay(false);
    //     dropdown.style.animation = "slide-out 1s";
    //     dropdown.style.left = "-376px";
    //   }
    //   console.log(!display)
    // }

    return(
        <div id="dropdown">
          <div class="dropdown-option">
            <p>Sneakers</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Sports Shoes</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Oxford</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Monk</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Chelsea</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Derby</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Loafers</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Brogue</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
          <div class="dropdown-option">
            <p>Sandals</p>
            <img src="./assets/nav/vector.svg" alt=""/>
          </div>
        </div>
    )
}