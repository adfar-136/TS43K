import React, { useState } from 'react'
import Form from './components/Form'

function App() {
  const [username,setUsername] = useState("");
  console.log(username)
  return (
    <div>
      {/* <form>
        <input type="text" placeholder='Enter username' value={username} 
        onChange={(e)=>{setUsername(e.target.value)}}/>
        <h1>{username}</h1>
        <input type="button" value="Submit" />
        <button onClick={(e)=>{e.preventDefault();setUsername("hello")}}>Update</button>
      </form> */}
      <Form/>
    </div>
  )
}

export default App