import React, { useState } from 'react'

export default function App() {
  const [todo,setTodo] = useState(["Item1","Item2"])
  const [input,setInput] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
   if(input.length>0){
    const newList = todo.concat(input);
    setTodo(newList)
   }else{
    alert('Nothing to add')
   }
  }
  const handleRemove =(i)=>{
    const newList = todo.filter((item,index)=>{return i !== index})
    setTodo(newList)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <input type="submit" value="ADD" />
      </form>
      {todo.map((item,index)=>
      <>
      <li>{item}</li>
      <button onClick={()=>handleRemove(index)}>Remove</button>
      </>)}

    </div>
  )
}
