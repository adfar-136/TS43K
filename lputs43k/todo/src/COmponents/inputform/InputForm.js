import React from 'react'
import mystyle from "./inputform.module.css"
export default function InputForm(props) {
  return (
    <div  className={mystyle.container}>
        {props.label && <label>{props.label}</label>}
        <input {...props} />
    </div>
  )
}
