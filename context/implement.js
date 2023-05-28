import { useState } from "react";
import context from "./maincontext";
const Context=({children})=>{
    const [newUser,setNewUser]=useState({
        Name:'',
        Password:'',
        Number:'',
        Address:'',
        Email:'',
        Age:''
    })
    const [allUser,setAllUser]=useState([{
        Name:'Rose',
        Password:'rose',
        Number:1234,
        Address:'abcd',
        Email:"rooserwl@gmail.com",
        Age:21
    }])
    return(
        <context.Provider value={{newUser,setNewUser,allUser,setAllUser}}>
            {children}
        </context.Provider>
    )
}
export default Context