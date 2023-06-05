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
    const [error,setError]=useState({
      message:''
    })
    const [page,setPage]=useState('');
    const [allUser,setAllUser]=useState([{
        Name:'Rose',
        Password:'rose',
        Number:1234,
        Address:'abcd',
        Email:"rooserwl@gmail.com",
        Age:21
    }])
    return(
        <context.Provider value={{newUser,setNewUser,allUser,setAllUser,page,setPage,error,setError}}>
            {children}
        </context.Provider>
    )
}
export default Context