import React from 'react'

export default function Pagination({length,paginate,perPage}) {
    const total = Math.ceil(length/perPage);
    const buttons = []
    for(let i=1;i<=total;i++){
      buttons.push(i)
    }
  return (
    <div>
      {buttons.map((item,index)=><li key={index}>
        <button onClick={()=>paginate(item)}>{item}</button>
      </li>)}
    </div>
  )
}
