import React from 'react'

export default function Next7Days({list}) {
    const date =new Date();
    const filteredList = list.filter((item)=>{
        const timeDiff = item.date - date;
        const dayDiff = Math.ceil(timeDiff/(24*60*60*1000))
        if(dayDiff>=0 && dayDiff < 8){
            return true
        }
    })
    
  return (
    <div className='inbox'>
        <div>
        {filteredList.map((item,index)=>{
            return (
                <div>
                    <li>{item.title} {item.date.toLocaleString()}</li>
                </div>
            )
        })}
    </div>
    </div>
  )
}
