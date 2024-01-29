import React from 'react'

export default function Username({params}) {
    console.log(params)
  return (
    <div>
        <h1>Username dynamic component {params.username}</h1>
    </div>
  )
}
