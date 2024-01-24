import React from 'react'
import { useParams } from 'react-router-dom'

export default function PhoneNumber() {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <h1> i am {params.id} my phone number is {params.number}</h1>
    </div>
  )
}
