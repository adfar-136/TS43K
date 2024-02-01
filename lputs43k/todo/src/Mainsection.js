import React from 'react'

export default function Mainsection({active}) {
  return (
    <div>
        {active === "INBOX" && (
            <div> 
                Home Component
            </div>
        )}
         {active === "TODAY" && (
            <div> 
                TODAY Component
            </div>
        )}
         {active === "NEXT7DAYS" && (
            <div> 
                NEXT Component
            </div>
        )}
    </div>
  )
}
