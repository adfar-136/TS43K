import React from 'react'
import style from "./Component2.module.css"
import mystyle from "./Component1.module.css"
export default function Component2() {
  return (
    <div>
        <h1 className={mystyle.heading1}>Component2</h1>
        <p className={style.para2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rem id impedit neque ab qui officiis illum perspiciatis fugiat enim?</p>
    </div>
  )
}
