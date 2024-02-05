import React,{useState} from 'react'
import "./App.css"
import SideNav from './SideNav'
import Mainsection from './Mainsection'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
export default function Todo({user}) {
  const [active,setActive] =useState("INBOX")
 const navigate = useNavigate();
 const handleSignout = ()=>{
  signOut(auth).then(()=>{
      navigate("/")
  })
}

  return (
    <>
      {user ? (
       <>
          <div className='container'>
        <h1>{user}'s Todo Application</h1>
        <div className="row">
           <div className='item  item1'>
             <SideNav change={setActive}/>
           </div>
           <div className="item item2">
              <Mainsection active={active}/>
           </div>
        </div>
        
      </div>
      <button onClick={handleSignout}>Logout</button>
       </>
      ):(
        <>
          <h1>You are not logged in?</h1>
          <p>To see your Todo Application. please click below and login first!</p>
          <button onClick={()=>navigate("/signin")}>Login</button>
        </>
      )}
    </>
  )
}
