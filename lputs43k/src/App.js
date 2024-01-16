import React,{useEffect, useState} from 'react'

function App() {
  const [count,setCOunt] = useState(0);
  useEffect(()=>{
    console.log("useEffect");
    const fun = ()=>console.log("event")
    document.addEventListener("click",fun)
  
    return ()=>{
      document.removeEventListener("click",fun)
    }
    // setInterval(()=>{
    //   console.log("I am seide Effec")
    // },3000)
  })
  return (
    <div>
      <h1>{count}</h1>
      <button  onClick={()=>setCOunt(count+1)}>Increment count</button>
    </div>
  )
}

export default App