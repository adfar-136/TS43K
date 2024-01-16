import React, { useState } from 'react'

function Form() {
    // const [name,setName] = useState("")
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("");
    const [input,setInput] = useState({
        name:"",
        email:"",
        password:""
    })
    const [condition,setCondition] = useState(true)
    // console.log(email,password);
    const handleSubmit =(e)=>{
        e.preventDefault();
        setCondition(false)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type="text" value={input.name} onChange={(e)=>{setInput((prev)=>({...prev,name:e.target.value}))}}/>
            <input type="email" value={input.email} onChange={(e)=>{setInput((prev)=>({...prev,email:e.target.value}))}}/>
            <input type="password" value={input.password} 
            onChange={(e)=>{setInput((prev)=>({...prev,password:e.target.value}))}}/>
            <input type="submit" value="Submit"/>

        </form>
        {!condition && (
        <>
            <h1>Your Name is :{input.name} </h1>
            <h1>Your email is :{input.email} </h1>
            <h1>Your password is :{input.password} </h1>
        </>
            
        )}
        
    </div>
  )
}

export default Form