"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Userpage() {
    const router = useRouter()
    console.log(router)
  return (
    <div>
        <h1>User details</h1>
        <button onClick={()=>router.push("/shop")}>Shop</button>
    </div>
  )
}
