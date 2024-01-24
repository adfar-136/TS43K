import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <h1>i am {params.idd}</h1>
    </div>
  )
}
