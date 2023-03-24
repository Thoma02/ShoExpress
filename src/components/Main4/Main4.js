export default function Main4() {
    return(
        <div id="main4">
            <h1>Our weekly pick</h1>
            <div id="main4-container">
                <div id="main4-image-container">
                <img src="./assets/main2-shoe-slider/the-joyride.svg" alt=""/>
                </div>
                <div id="info">
                <h2 id="shoe-name">Nike- The Joyride</h2>
                <p id="shoe-price" class="blue-text">$390</p>
                <div id="interactive">
                    <div id="colour">
                    <h3>Colour</h3>
                    <div id="colour-selectors">
                        <div id="black"></div>
                        <div id="red"></div>
                    </div>
                    <div id="amount">
                        <img id="minus" src="./assets/main4-icons/minus.svg" alt=""/>
                        <p id="counter">1</p>
                        <img id="plus" src="./assets/main4-icons/plus.svg" alt=""/>
                    </div>
                    </div>
                    <div id="size">
                    <h3>Size</h3>
                    <div id="size-selectors">
                        <div id="size-option-default" class="size-option">
                        <p>41</p>
                        </div>
                        <div class="size-option">
                        <p>42</p>
                        </div>
                        <div class="size-option">
                        <p>43</p>
                        </div>
                        <div class="size-option">
                        <p>44</p>
                        </div>
                    </div>
                    <div id="favourite">
                        <img src="./assets/main4-icons/heart-blue.svg" alt=""/>
                    </div>
                    </div>
                    <div id="reviews">
                    <h3>Reviews</h3>
                    <div id="hearts">
                        <img id="heart-default" class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                        <img class="heart" src="./assets/main4-icons/heart-transparent.svg" alt=""/>
                    </div>
                    </div>
                </div>
                <div id="photos">
                    <img class="shoe-image-angles" src="./assets/main4-images/image20.svg" alt=""/>
                    <img class="shoe-image-angles" src="./assets/main4-images/image21.svg" alt=""/>
                    <img class="shoe-image-angles" src="./assets/main4-images/image23.svg" alt=""/>
                </div>
                <button>Buy It Now!</button>
                </div>
            </div>
        </div>
    )
}