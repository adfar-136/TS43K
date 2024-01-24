import React, { useContext } from 'react'
import { MyContext } from './StateProvider'
export default function StateConsumer() {
    const {count,setCount,number,setNumber} = useContext(MyContext)
  return (
    <div>
        {/* <MyContext.Consumer>
            {({count,setCount,number,setNumber})=>{
              return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={()=>setCount(count+1)}>Increment</button>
                </div>
              )
            }}
        </MyContext.Consumer> */}
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number-1)}>Decrement</button>
    </div>
  )
}
