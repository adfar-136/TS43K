import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Blog from './components/routes/Blog'
import Contatc from './components/routes/Contatc'
import User from './components/routes/User'
import UserDetails from './components/routes/UserDetails'
import PhoneNumber from './components/routes/PhoneNumber'
import Keyy from './components/routes/Keyy'
import Student from './components/routes/Student'
import AsliHome from './components/routes/AsliHome'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      

        <Routes>
          <Route path='/' element={<AsliHome/>}>
             <Route index element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/blog' element={<Blog/>}/>
             <Route path='/contact' element={<Contatc/>}>
                <Route path='key' element={<Keyy/>}/>
                <Route path='student' element={<Student/>}/>
             </Route>
             <Route path='/user' element={<User/>}/>
             <Route path='/user/:idd' element={<UserDetails/>}/>
             <Route path='/user/:id/phone/:number' element={<PhoneNumber/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
