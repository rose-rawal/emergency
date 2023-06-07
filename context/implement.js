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
    const [serverUser,setServerUser]=useState({
        Name:'',
        Password:'',
        Number:'',
        Email:''
    })
    const [error,setError]=useState({
      message:''
    })
    const [isServer,setIsServer]=useState(false)
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
        <context.Provider value={{newUser,setNewUser,allUser,setAllUser,page,setPage,error,setError,isServer,setIsServer,serverUser,setServerUser}}>
            {children}
        </context.Provider>
    )
}
export default Context