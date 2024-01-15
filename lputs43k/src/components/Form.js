import React, { useState } from 'react'

function Form() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [condition,setCondition] = useState(true)
    console.log(email,password);
    const handleSubmit =(e)=>{
        e.preventDefault();
        setCondition(false)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="Submit"/>
            
        </form>
        {!condition && (
        <>
            <h1>Your email is :{email} </h1>
            <h1>Your password is :{password} </h1>
        </>
            
        )}
        
    </div>
  )
}

export default Form