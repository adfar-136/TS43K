import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBackgroundColor } from './ColorStore/action';

export default function Div() {
    const backgroundColor = useSelector((state)=>state.backgroundColor);
    const dispatch = useDispatch()
  return (
    <>
     <div style={{backgroundColor:backgroundColor,height:"300px",width:"300px",margin:"auto",border:"2px solid red"}}>
       
       </div>
       <button onClick={()=>dispatch(setBackgroundColor("red"))}>Red</button>
       <button onClick={()=>dispatch(setBackgroundColor("green"))}>Green</button>
       <button onClick={()=>dispatch(setBackgroundColor("pink"))}>Pink</button>
       <button onClick={()=>dispatch(setBackgroundColor("yellow"))}>Yellow</button>
       <button onClick={()=>dispatch(setBackgroundColor("aqua"))}>aqua</button>
       <button onClick={()=>dispatch(setBackgroundColor("magenta"))}>Magenta</button>
       <button onClick={()=>dispatch(setBackgroundColor("purple"))}>Purple</button>
       <button onClick={()=>dispatch(setBackgroundColor("orange"))}>Orange</button>
       
    </>
   

  )
}
