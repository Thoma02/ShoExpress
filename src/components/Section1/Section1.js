import React from "react";
import Button from "./Button/Button";
// import '../../styles/App.css';

export default function Main1() {

    return(
            <div id="main1">
                <img id="circle1" src="./assets/main1-background/ellipse1.svg" alt=""/>
                <img id="circle2" src="./assets/main1-background/ellipse4.svg" alt=""/>
                <img id="circle3" src="./assets/main1-background/ellipse5.svg" alt=""/>
                <img id="circle4" src="./assets/main1-background/ellipse6.svg" alt=""/>
                <div id="main1-text">
                    <h1>Sports Shoes</h1>
                    <h2><span class="blue-text">Men’s </span>collection</h2>
                    <p class="grey-text">Find your true style with shoexpress
                    and explore the variety of playful, 
                    colourful designs!</p>
                    <Button />
                </div>
                <div id="main1-carousel2">
                    <div class="box">
                    <img id="shoe1" class="shoe-image" src="./assets/main1-carosuel/shoe1.svg" alt=""/>
                    </div>
                    <div class="box">
                    <img id="shoe2" class="shoe-image" src="./assets/main1-carosuel/shoe2.svg" alt=""/>
                    </div>
                    <div class="box">
                    <img id="shoe3" class="shoe-image" src="./assets/main1-carosuel/shoe3.svg" alt=""/>
                    </div>
                    <div class="box">
                    <img id="shoe4" class="shoe-image" src="./assets/main1-carosuel/shoe4.svg" alt=""/>
                    </div>
                    <div class="box">
                    <img id="shoe5" class="shoe-image" src="./assets/main1-carosuel/shoe5.svg" alt=""/>
                    </div>
                    <div class="box">
                    <img id="shoe6" class="shoe-image" src="./assets/main1-carosuel/shoe6.svg" alt=""/>
                    </div>
                    <div class="box">
                    <img id="shoe7" class="shoe-image" src="./assets/main1-carosuel/shoe7.svg" alt=""/>
                    </div>
                </div>
            </div>
    )
}