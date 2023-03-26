import React, { useState } from 'react';
// import '../../../App.css'

function Counter() {
  const [count, setCount] = useState(1);

  function handleClick(button) {
    if(button === "minus") {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(count - 1);
      }
    } else if( button === "plus") {
        if (count === 100) {
          setCount(100);
        } else {
          setCount(count + 1);
        }
    }
    
  }

  return(
    <div id="amount">
        <img id="minus" onClick={() => handleClick("minus")} src="./assets/main4-icons/minus.svg" alt=""/>
        <p id="counter">{count}</p>
        <img id="plus" onClick={() => handleClick("plus")} src="./assets/main4-icons/plus.svg" alt=""/>
    </div>
  )
}

export default Counter;