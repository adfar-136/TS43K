import React from 'react'
import "./App.css"
export default function PokemonThumbnail({height,weight,setCondition}) {
  return (
    <div className='modal'>
        <h1>Height: {height}</h1>
        <h1>weight:{weight}</h1>
        <button onClick={()=>setCondition(false)}>close</button>
    </div>
  )
}
