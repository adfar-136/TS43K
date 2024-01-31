import React, { useState } from 'react'
import useCounter from './useCounter'

export default function Like() {
    const {count,increment} = useCounter(0)
  return (
    <div>
        <button onClick={()=>increment()}>like:{count}</button>
    </div>
  )
}
