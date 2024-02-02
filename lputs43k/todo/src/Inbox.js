import React, { useRef, useState } from 'react'

export default function Inbox({list,append}) {
    const [newTask,setNewTask] = useState(false)
    const todoRef = useRef()
    const dateRef = useRef();
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(todoRef.current.value === ""){
        alert('enter a task')
        return
      }
      const obj ={
        title:todoRef.current.value,
        date:new Date(dateRef.current.value)
      }
      append(obj);
      setNewTask(false)


    }
  return (
    <div className='inbox'>
    {!newTask && <button onClick={()=>setNewTask(true)}>Add</button>}
    {newTask && (
        <form>
         <input type="text" ref={todoRef} placeholder='Enter your task'/>
         <div>
         <button onClick={(e)=>handleSubmit(e)}>Add New Task</button>
         <button onClick={()=>setNewTask(false)}>Cancel</button>
         <input type="date" defaultValue="2024-03-03" ref={dateRef}/>
         </div>
        </form>
    )}
    <div>
        {list.map((item,index)=>{
            return (
                <div>
                    <li>{item.title} {item.date.toLocaleString()}</li>
                </div>
            )
        })}
    </div>
    </div>
   
  )
}
