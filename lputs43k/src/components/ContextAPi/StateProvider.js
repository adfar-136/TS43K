import React, { useState } from 'react'
import StateConsumer from './StateConsumer';
const MyContext = React.createContext()
export default function StateProvider() {
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState(100)
  return (
    <div>
         <MyContext.Provider value={{count,setCount,number,setNumber}}>
             <StateConsumer/>
         </MyContext.Provider>
    </div>
  )
}
export {MyContext}