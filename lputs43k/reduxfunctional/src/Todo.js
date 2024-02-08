import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDTODO, REMOVETODO } from './TodoCountStore/action'

export default function Todo() {
    const todo = useSelector((state)=>state.todo)
    const dispatch = useDispatch()
    const [task,setTask] = useState()
    const handleAdd =()=>{
         dispatch(ADDTODO(task))
         setTask("")
    }
  return (
    <div>
        <h1>My Todo List Application</h1>
        <input type="text" value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add Item</button>
        <ul>
            {todo.map((item,index)=>{
                return <>
                 <li>{item}</li>
                 <button onClick={()=>dispatch(REMOVETODO(index))}>Remove</button>
                </>
            })}
        </ul>
    </div>
  )
}
