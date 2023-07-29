import { useEffect, useState } from "react";
import context from "./maincontext";
import {io} from 'socket.io-client'
import Constants from "expo-constants";
import { getStats,getAllStats } from "../api/statistics";

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
    const [data,setData]=useState("");
const [showForm,setShowForm]= useState(false);

    const [statData,setStatData] = useState();
    const [statData1,setStatData1] = useState();
    async function back (){
console.log("Back is working");
        const res = await getStats('Bagmati Province');
    setStatData(res);
    
}
const backend = async ()=>{
    console.log("Backend is working");
            const res = await getAllStats();
        setStatData1(res);
        
    }
     
 
    return(
        <context.Provider value={{backend,statData1,showForm,setShowForm,data,setData,newUser,setNewUser,allUser,setAllUser,page,setPage,error,setError,isServer,setIsServer,serverUser,setServerUser,socket}}>
            {children}
        </context.Provider>
    )
}
export default Context