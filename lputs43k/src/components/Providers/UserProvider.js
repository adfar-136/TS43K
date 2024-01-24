import React, { useState } from 'react'
const userContext = React.createContext()
export default function UserProvider({children}) {
    const [user,setUser] = useState("Adfar")
  return (
    <userContext.Provider value={{user,setUser}}>
      {children}
    </userContext.Provider>
  )
}
export {userContext}