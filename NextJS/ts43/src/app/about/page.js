"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {
  const router = useRouter();
  console.log(router)
  return (
    <div>
        <h1>About page component</h1>
        <Link href="/contact">contact</Link>
        <button onClick={()=>router.push("/shop")}>shop</button>
    </div>
  )
}
