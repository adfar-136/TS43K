import React from 'react'
import { useState } from 'react'

export default function App() {
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    // console.log(e.target)
    const {name,value} = e.target;
    setInputs({...inputs,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("name",inputs.name)
    localStorage.setItem("email",inputs.email)
    localStorage.setItem("password",inputs.password)
    // localStorage.setItem("userInfo",JSON.stringify(inputs))
    setInputs({
      name:"",
      email:"",
      password:""
    })
  }
  const handleRemove = ()=>{
    localStorage.removeItem('name');
    localStorage.removeItem("email")
    localStorage.removeItem("password")
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input type="text" value={inputs.name}
         onChange={handleChange} name='name'/> <br /> <br />
         <input type="email" value={inputs.email} 
         onChange={handleChange} name='email'/> <br /> <br />
         <input type="password" value={inputs.password}
         onChange={handleChange} name="password"/> <br /> <br />
         <input type="submit" value="Submit" />
       </form>
       {localStorage.getItem("name") && (
        <h1>{localStorage.getItem("name")}</h1>
       )}
       <button onClick={handleRemove}>Remove</button>
    </div>
  )
}
