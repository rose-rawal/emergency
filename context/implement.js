import { useState } from "react";
import context from "./maincontext";
const Context=({children})=>{
    const [signedUser, setSignedUser] = useState([]);
    const [newUser,setNewUser]=useState({
        Name:'',
        Password:'',
        Number:'',
        Address:''
    })
    return(
        <context.Provider value={{newUser,setNewUser,signedUser,setSignedUser}}>
            {children}
        </context.Provider>
    )
}
export default Context