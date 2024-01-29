"use client"
import React, { useState } from 'react'

export default function Inputform({fetchData}) {
    const [input,setInput] = useState("")
    const handleSubmit=(e)=>{
       e.preventDefault()
       fetchData(input)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <input type="submit" value="Find" />
        </form>
    </div>
  )
}
