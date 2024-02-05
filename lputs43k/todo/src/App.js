import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './COmponents/home/Home'
import Signup from './COmponents/Signup/Signup'
import Sign from './COmponents/Signin/Sign'
import Profile from './Profile'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Todo from './Todo'

export default function App() {
  const [user,setUser] = useState("");
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user.email)
      }
      else {
        setUser("")
      }
    })
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Sign/>}/>
          <Route path='/profile' element={<Profile user={user}/>}/>
          <Route path='/todo' element={<Todo user={user}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
