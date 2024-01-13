import React from 'react'
import "../App.css"
export default function ThemeChanger() {
    const [text, setText] = React.useState("Dark");
    const [theme,setTheme] = React.useState("active");
    const handleClass = ()=>{
        if(text === "Dark"){
            setText("Light");
            setTheme("non-active")
        } else{
            setText("Dark");
            setTheme("active")
        }
    }
  return (
    <div className={theme}>
        <h1>Inner Container</h1>
        <button onClick={()=>{handleClass()}}>Inner {text}</button>
    </div>
  )
}
