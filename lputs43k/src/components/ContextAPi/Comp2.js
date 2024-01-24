import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { FirstName,LastName } from '../../App'
export default function Comp2() {
    const fName = useContext(FirstName);
    const lName = useContext(LastName)
    return (
    <div>
       <h1>My Name isbhhsd {fName} {lName}</h1>
        <Comp3/>
    </div>
  )
}
