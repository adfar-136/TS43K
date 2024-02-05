import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
export default function Home() {
  return (
    <div className={style.navbar}>
        <div>Todo Application</div>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
                <Link to="/signin">Login</Link>
            </li>
        </ul>
    </div>
  )
}
