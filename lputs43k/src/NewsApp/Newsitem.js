import React from 'react'
import "./News.css"
export default function Newsitem({title,description,img,url}) {
  return (
    <div>
        <div className='card'>
            <h1 className='heading'>{title?title.slice(0,25):"Title Nhi Hain"}</h1>
            <div className="inner">
            <p className='description'>{description?description.slice(0,70):"Yahan Description NHi Hain"}</p>
            <img className='img' src={img?img:"https://bt.bmcdn.dk/media/cache/resolve/image_960x545/image/211/2114934/24618166-arkivfoto-af-den-dansk-bildesigner-henrik-fisker.jpg"} alt="title" />
            </div>
            <a className='btn' href={url}>Read More</a>
        </div>
    </div>
  )
}
