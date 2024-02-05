import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'

export default function Profile({user}) {
    const navigate =  useNavigate()
    const handleSignout = ()=>{
        signOut(auth).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
        {user ? (
            <div>
                <h1>Welcome {user}</h1>
                <button onClick={handleSignout}>Signout</button>
            </div>
        ) :(
            <div>
              <h1>You are not logged in.</h1>  
              <button onClick={()=>navigate("/signin")}>Login</button>  
            </div>
        )}
    </div>
  )
}
