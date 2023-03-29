import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown.js";

export default function Nav() {

  const [display, setDisplay] = useState(false);

  function handleClick() {
    if(!display) {
        setDisplay(true);
    } else {
        setDisplay(false);
    }
  }

    return(
      <>
        <nav>
          <div id="menu-and-title">
            <img id="menu-icon" onClick={() => handleClick()} src="./assets/nav/burger.svg" alt="Menu"/>
            <h1>SHO<span className="blue-text">E</span>XPRESS</h1>
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
        <Dropdown display={display}/>
      </>
    )
}
