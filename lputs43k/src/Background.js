import React, { useReducer } from 'react'
const reducer = (state,action)=>{
   switch(action.type){
    case "red":
        return {color:action.payload}
    
    default:
        return state
   }
}
export default function Background() {
    const [state,dispatch] = useReducer(reducer,{color:"white"})
  return (
    <div>
        <div style={{height:"300px",backgroundColor:state.color,width:"300px",border:"2px solid red"}}></div>
        <button onClick={()=>dispatch({type:"red",payload:"red"})}>red</button>
        <button onClick={()=>dispatch({type:"red",payload:"black"})}>black</button>
        <button onClick={()=>dispatch({type:"red",payload:"blue"})}>blue</button>
        <button onClick={()=>dispatch({type:"red",payload:"orange"})}>orange</button>
    </div>
  )
}
