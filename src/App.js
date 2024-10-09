import React, { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }


  return (
   <>
    <h1>Count: {count}</h1>
    <button onClick={handleClick}>Increment</button>
   </>
  )
}

export default App;