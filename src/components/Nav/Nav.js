import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown.js";
// import '../../styles/App.css';

export default function Nav() {

  const [display, setDisplay] = useState(false);
  const dropdown = document.querySelector("#dropdown");
  console.log(dropdown);

  function handleClick() {
    console.log(dropdown.style)
    if(!display) {
        setDisplay(true);
        dropdown.style.animation = "slide-in 1s";
        dropdown.style.left = 0;
    } else {
        setDisplay(false);
        dropdown.style.animation = "slide-out 1s";
        dropdown.style.left = "-390px";
    }
    console.log(!display)
  }

    return(
      <>
        <nav>
          <div id="menu-and-title">
            <img id="menu-icon" onClick={() => handleClick()} src="./assets/nav/burger.svg" alt="Menu"/>
            <h1>SHO<span class="blue-text">E</span>XPRESS</h1>
          </div>
          <div id="nav-links">
            <a class="blue-text" href="nav">Home</a>
            <a href="#main3">Shop</a>
            <a href="#main4">Order</a>
            <a href="#main5">Contact</a>
            <a href="footer">Log in</a>
          </div>
          <img id="search" src="./assets/nav/search.svg" alt="Search"/>
        </nav>
        <Dropdown />
      </>
    )
}

