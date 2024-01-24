import { useContext } from "react";
import { userContext } from "./Providers/UserProvider";

function About(){
    const {user,setUser} = useContext(userContext)
    console.log()
    return (
        <div>
            <h1>I am {user}</h1>
            
        </div>
    )
}
export default About;