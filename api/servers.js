import axios from "axios";
import axiosInstance from "./axiosInstance";
import serverInstance from "./serverInstance";

export const getServer = async () => {
    try{
    const res =  await serverInstance.get("/all")
    // console.log("res",res.data)
    return res.data
    }catch(err){
        console.log("error:",err)
    }
    // await axios.get('http://localhost:5000/all').then(abc=>console.log(abc.data)).catch(err=>console.log(err))
}
export const addServer=async (dat)=>{
    try{
        // console.log(data.newUser);
        const data=dat.serverUser
        const res=await serverInstance.post("/register",{
            name:data.Name,
            password:data.Password,
            email:data.Email,
            phone:data.Number
        });
        return res.data;

    }
    catch(err){
        console.log(err);
    }
}
export const loginServer=async({Email,Password})=>{
    // console.log(Email,Password)
    try{
        const res=await serverInstance.post('/login',{
            email:Email,
            password:Password
        })
        return res.data
    }catch(err){
        console.log("err : ",err)
    }
}
export const getOneServer=async(_id)=>{
    // console.log("id: ",_id)
    try{
        
        const res=await serverInstance.get(`/all/${_id}`);
        // console.log("res ",res.data)
        return res.data
    }catch(e){
        // console.log("hello")
        console.log(e)
    }
}