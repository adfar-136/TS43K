import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './TodoCountStore/action'

export default function Count() {
    const counter= useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{counter}</h1>
         <button onClick={()=>dispatch(increment())}>Increment</button>
         <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
