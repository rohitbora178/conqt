import React, { useEffect, useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(()=>{
    // Add a timer to increment the count every second
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  })


  return (
   <>
    <h1>Count: {count}</h1>
    <button onClick={handleClick}>Increment</button>
   </>
  )
}

export default App;