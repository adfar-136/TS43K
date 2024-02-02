import React, { useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7Days from './Next7Days'
const list = [
    {title:"Lets complete react",date:new Date("02/02/2024")},
    {title:"Sleep Early",date:new Date("02/04/2024")},
    {title:"stop watching reels",date:new Date("12/02/2024")}
]
export default function Mainsection({active}) {
    const [filteredlist,setFilteredList] = useState(list);
    const addToList =(obj)=>{
        list.push(obj)
        setFilteredList(list)
    }
  return (
    <div>
        {active === "INBOX" && (
           <Inbox list={filteredlist} append={addToList}/>
        )}
         {active === "TODAY" && (
            <Today list={filteredlist}/>
             
        )}
         {active === "NEXT7DAYS" && (
            <Next7Days list={filteredlist}/>
        )}
    </div>
  )
}
