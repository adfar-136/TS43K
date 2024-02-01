import React, { useState } from 'react'
import "./App.css"
import SideNav from './SideNav'
import Mainsection from './Mainsection'
export default function App() {
  const [active,setActive] =useState("INBOX")
  return (
    <div className='container'>
      <h1>Adfar's Todo Application</h1>
      <div className="row">
         <div className='item  item1'>
           <SideNav change={setActive}/>
         </div>
         <div className="item item2">
            <Mainsection active={active}/>
         </div>
      </div>
    </div>
  )
}
