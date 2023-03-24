import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  function Minus() {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  function Plus() {
    if (count === 100) {
      setCount(100);
    } else {
      setCount(count + 1);
    }
  }

  return(
    <div>
      <button onClick={Minus}>-</button>
      <span>{count}</span>
      <button onClick={Plus}>+</button>
    </div>
  )
}

export default Counter;