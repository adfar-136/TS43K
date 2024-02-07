import React, { useState } from 'react'

import TvCard from './TvCard';

export default function TvList({series}) {
    const [sortOrder,setSortOrder] = useState("asc");
    const sortedMovies = series.sort((a,b)=>{
        if(sortOrder === "asc"){
            return a.vote_average - b.vote_average
        } else if(sortOrder==="dsc") {
            return b.vote_average - a.vote_average
        } else if(sortOrder === "countasc"){
            return a.vote_count - b.vote_count
        } else if(sortOrder === "countdsc"){
            return b.vote_count - a.vote_count
        }
    })
    console.log(sortOrder)
  return (
    <div >
        <div className='order'>
            <li onClick={()=>setSortOrder("asc")}>Rating Ascending</li>
            <li onClick={()=>setSortOrder("dsc")}>Rating Descending</li>
            <li onClick={()=>setSortOrder("countasc")}>Votes Ascending</li>
            <li onClick={()=>setSortOrder("countdsc")}>Votes Descending</li>
            <li>Release Ascending</li>
            <li>Release Descending</li>
        </div>
        <ul className='movielist'>
            {sortedMovies.map((tv)=>(
                <TvCard key={tv.id} series={tv}/>
            ))}
        </ul>
    </div>
  )
}
