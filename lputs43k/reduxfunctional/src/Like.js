import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './CountRedux/action'

export default function Like() {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Like:{count}</button>
    </div>
  )
}
