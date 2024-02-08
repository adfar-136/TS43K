import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CountRedux/action'

export default function Counter() {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
