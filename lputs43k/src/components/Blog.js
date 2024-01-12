import React from 'react'

function Blog({name,age,gender}) {
  return (
    <div>
        <h1>{name} </h1>
        <h1>{age} </h1>
        <h1>{gender} </h1>
    </div>
  )
}

export default Blog