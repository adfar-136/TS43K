import React from 'react'
import { FirstName,LastName } from '../../App'
export default function Comp3() {
  return (
    <div>
        <FirstName.Consumer>
            {(fName)=>{
               return (
                <LastName.Consumer>
                    {(lName)=>{
                       return (
                        <div>
                            <h1>My Full Name is {fName} {lName}</h1>
                        </div>
                       )
                    }}
                </LastName.Consumer>
               )
            }}
        </FirstName.Consumer>
    </div>
  )
}
