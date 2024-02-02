import React from 'react'

export default function Today({list}) {
    const date = new Date()
     const filteredList = list.filter((item)=>{
       if(date.getFullYear() !== item.date.getFullYear()){
        return false
       }
       if(date.getMonth() !== item.date.getMonth()){
        return false
       }
       if(date.getDate()!== item.date.getDate()){
        return false
       }
       return true;
   
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
