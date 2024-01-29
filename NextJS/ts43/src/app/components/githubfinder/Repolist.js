import React from 'react'

export default function Repolist({repos}) {
  return (
    <div>
        <ul>
            {repos.map((item,index)=><li key={index}>
                <a href={item.html_url}>{item.html_url}</a>
            </li>)}
        </ul>
    </div>
  )
}
