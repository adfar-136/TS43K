import React from 'react'

export default function shoplayout({children,book,pen}) {
    const condition = false
  return (
    <div>
        {children}
        {condition?book:pen}
    </div>
  )
}
