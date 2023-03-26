import React, { useState } from "react";
import Button2 from "./Button2/Button2";

export default function Main2() {

    return(
        <div id="main2">
            <img id="big-shoe" src="./assets/main2-image/image16.svg" alt=""/>
            <Button2 />
            <div id="black-friday">
                <h1 id="black-text">BLACK</h1>
                <h1 id="together-in">TOGETHER</h1>
                <h1 id="power">IN POWER</h1>
                <h1 id="friday">FRIDAY</h1>
            </div>
            <span id="discount">70% OFF</span>
        </div>
    )
}