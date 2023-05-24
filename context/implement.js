import { useState } from "react";
import context from "./maincontext";
const Context=({children})=>{
    const [newUser,setNewUser]=useState({
        Name:'',
        Password:'',
        Number:'',
        Address:''
    })
    return(
        <context.Provider value={{newUser,setNewUser}}>
            {children}
        </context.Provider>
    )
}
export default Context