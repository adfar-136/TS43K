import { useState } from "react"

const useCounter =()=>{
    const [count,setCount] = useState(10)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return {
        count:count,
        increment:increment,
        decrement:decrement
    }
}
export default useCounter;