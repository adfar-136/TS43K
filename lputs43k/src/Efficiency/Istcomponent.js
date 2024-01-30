import React, { useState } from 'react'

function Istcomponent({name}) {
    console.log("First child called")
    const [number,setNumber] = useState(1000)
    
  return (
    <div>
        {name}
        <h2>Input Number: {number}</h2>
        <button onClick={()=>setNumber(number-1)}>Decreemnt</button>
    </div>
  )
}
export default React.memo(Istcomponent)