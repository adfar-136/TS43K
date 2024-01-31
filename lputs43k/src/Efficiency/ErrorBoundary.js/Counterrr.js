import React, { useEffect, useState } from 'react'

export default function Counterrr() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(count===15){
            throw new Error("App Barbaad")
        }
    })
  return (
    <div>
        <h1>count :{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
