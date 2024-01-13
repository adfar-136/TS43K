import React, { useState } from 'react';
import "./App.css"
const Comp1 =()=>{
  return <h1>I am Groot</h1>
}
const Comp2=()=>{
  return (
    <h1>I am not Groot</h1>
  )
}
const Comp3=()=>{
  return (
    <h1>I am component three</h1>
  )
}
export default function App() {
 
  const [condition,setCondition]= useState(true);
  const handleCondition =()=>{
    // if(condition === true){
    //   setCondition(false)
    // } else {
    //   setCondition(true)
    // }
    setCondition(!condition)
  }
    return (
      <>
      <div className={condition?"active":"not-active"}>
      <h1>Hello True</h1>
      <button onClick={()=>handleCondition()}>{condition?"DisplayNotGrrot":"DisplayGroot"}</button>
      {condition?<Comp1/>:<Comp2/>}
      </div>
       {condition && (
        <div>
          <Comp3/>
          <button onClick={()=>setCondition(false)}>x</button>
        </div>
       )}
      </>
     
    )
  
}
