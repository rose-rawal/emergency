import { useEffect, useState } from "react";
import context from "./maincontext";
import {io} from 'socket.io-client'
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:4000`;
const Context=({children})=>{
    // useEffect(()=>{

        var socket=io(uri)
    // },[])
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
        <context.Provider value={{newUser,setNewUser,allUser,setAllUser,page,setPage,error,setError,isServer,setIsServer,serverUser,setServerUser,socket}}>
            {children}
        </context.Provider>
    )
}
export default Context