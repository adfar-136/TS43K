import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Contatc() {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/about")
  }
  return (
    <div>
        <h1>I am CONTACT Component</h1>
        <button onClick={handleClick}>Go to About</button>
        <Outlet/>


    </div>
  )
}
