import React from 'react'
import useCounter from './useCounter'

export default function Countr() {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
       <h1>counter: {count}</h1>
       <button onClick={()=>increment()}>Increment</button>
       <button onClick={()=>decrement()}>Decrement</button>
    </div>
  )
}
