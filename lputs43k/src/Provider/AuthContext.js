import React, { createContext, useContext, useState } from 'react'
const Authhcontext = createContext()
export default function AuthContext({children}) {
    const [isLoggedIn,setIsloggedIn] = useState(false)
    const login=(token)=>{
        localStorage.setItem("token",token);
        setIsloggedIn(true)
    }
    const logout=()=>{
        localStorage.removeItem("token");
        setIsloggedIn(false)
    }
  return (
    <div>
       <Authhcontext.Provider value={{isLoggedIn,login,logout}}>
         {children}
       </Authhcontext.Provider>
    </div>
  )
}
export const useAuth =()=>{
    return useContext(Authhcontext)
}
