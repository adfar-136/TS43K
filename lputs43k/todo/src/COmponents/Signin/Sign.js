import React, { useState } from 'react'
import mystyle from "./signin.module.css"
import InputForm from '../inputform/InputForm'
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../../firebase';
export default function Sign() {
  const [values,setValues] = useState({
    email:"",
    password:""
  })
  const [errMsg,setErrMsg] = useState("");
  const navigate = useNavigate()
  const handleSubmission=()=>{
    if(!values.email || !values.password){
      setErrMsg("Please fill all feilds")
      return
    }
    setErrMsg("");
    signInWithEmailAndPassword(auth,values.email,values.password)
    .then((response)=>{
      const user = response.user
      console.log(user);
      navigate('/todo')
    }).catch((err)=>{
       console.log(err)
    })
    
    
  }
  return (
    <div className={mystyle.form}>
      <div className={mystyle.innerBox}>
        <h1>Signin Page</h1>
        <InputForm label="Email: " type="email" placeholder="Enter email"
        value={values.email}
        onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
        <InputForm label="Password: " type="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}/>
      
      <div className={mystyle.footer}>
        <b>{errMsg}</b>
        <button onClick={handleSubmission}>Login</button>
        <div className={mystyle.navigate}>
          <p>Already have an account?</p>
          <li><Link className={mystyle.btn} to="/signup">Signup</Link></li>
  
        </div>
      </div>
      </div>
    </div>
  )
}
