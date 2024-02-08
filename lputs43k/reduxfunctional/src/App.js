import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './thunkStore/action'
// import Counter from './Counter'
// import Like from './Like'
// import Div from './Div'
// import Todo from './Todo'
// import Count from './Count'

export default function App() {
  const num = useSelector((state)=>state.num) 
  const dispatch = useDispatch()
  return (
    <div>
       {/* <Todo/>
       <Count/>
      {/* <Counter/>
      <Like/>
      <Div/> */} 
      <h1>{num}</h1>
      <button onClick={()=>dispatch(increment(1000))}>+</button>
      <button onClick={()=>dispatch(increment(10000))}>++</button>
      <button onClick={()=>dispatch(increment(100000))}>+++</button>
      <button onClick={()=>dispatch(increment(1000000))}>++++</button>
      <button onClick={()=>dispatch(decrement(1000))}>-</button>
      <button onClick={()=>dispatch(decrement(10000))}>--</button>
      <button onClick={()=>dispatch(decrement(100000))}>---</button>
      <button onClick={()=>dispatch(decrement(1000000))}>----</button>
    </div>
  )
}
