import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(()=>{
    fetchData();
  } , [])
  return (
   <>
   {data.map((data)=>(
<div >
   <h1>{data.title}</h1>
   <p>{data.description}</p>
   <img src={data.image} alt={data.title} />
   <p>Author: {data.author}</p>
   <p>Date: {data.date}</p>
   <button onClick={()=> fetchData()}>Fetch Data</button>
   <hr />
   
</div>
   ))}
   </>
  )
}

export default App