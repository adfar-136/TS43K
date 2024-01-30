import React from 'react'

 function Secondcomponent() {
    console.log("second component")
  return (
    <div>Secondcomponent</div>
  )
}
export default React.memo(Secondcomponent)