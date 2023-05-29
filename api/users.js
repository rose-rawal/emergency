import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getUser = async () => {
    try{
    const res =  await axiosInstance.get("/all")
    // console.log("res",res.data)
    return res.data
    }catch(err){
        console.log("error:",err)
    }
    // await axios.get('http://localhost:5000/all').then(abc=>console.log(abc.data)).catch(err=>console.log(err))
}
export const addUser=async (dat)=>{
    try{
        // console.log(data.newUser);
        const data=dat.newUser
        const res=await axiosInstance.post("/register",{
            name:data.Name,
            password:data.Password,
            email:data.Email,
            age:data.Age,
            address:data.Address,
            phone:data.Number
        });
        return res.data;

    }
    catch(err){
        console.log(err);
    }
}
export const login=async({Email,Password})=>{
    // console.log(Email,Password)
    try{
        const res=await axiosInstance.post('/login',{
            email:Email,
            password:Password
        })
        return res.data
    }catch(err){
        console.log("err : ",err)
    }
}
export const getOneUser=async(_id)=>{
    // console.log("id: ",_id)
    try{
        
        const res=await axiosInstance.get(`/all/${_id}`);
        // console.log("res ",res.data)
        return res.data
    }catch(e){
        // console.log("hello")
        console.log(e)
    }
}