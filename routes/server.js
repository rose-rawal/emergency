import {Router} from 'express'
import userSchema from '../models/userSchema.js'
import {decrypt} from '../utils/decrypt.js'
import {encrypt} from '../utils/encrypt.js'
import serverSchema from '../models/serverSchema.js'
const serverrouter = Router()
async function registerUser(req,res){
    const {name,password,email,phone}=req.body
    if(!name||!password||!email||!phone){
        return res.status(400).json({
            success:false,
            message:"missing Field"
        })
    }
    const exist=await serverSchema.exists({
        email
    })
    if(exist){
        return res.status(400).json({
            success: false,
            message: "already have email",
            
        })
    }
    const user=serverSchema({
        name,password:await encrypt(password),email,phone
    })
    await user.save();
    const data=await encrypt(password);
    return res.json({
        success:true,
        message:"data added",
        data
    })
    
}
serverrouter.post("/register",registerUser)

async function login(req,res){
    const {email,password}=await req.body;
    console.log(email)
    if(!email || !password){
        return res.json({
            success:false,
        message: "Null Name or Password",
        })
    }
    const found=await serverSchema.findOne({email})
    if(!found){
        return res.json({
            success:false,
        message: "Email not found",
        })
    }
    const pass=await decrypt(password,found.password)
    console.log(pass)
    
    if(found.email===email){
        return res.json({
            success:true,
            message: "user found",
            found
        })
    }
    return res.json({
        success:false,
        message: "Credential not Matched",
        
    })
}

serverrouter.post('/login',login)
const getOneUser=async(req,res)=>{
    const id=req.params.id;
    // console.log()
    const user=await userSchema.findOne({
        _id:id
    })
    res.json({
        name:user.name,email:user.email,phone:user.phone,age:user.age,address:user.address
    })
}
serverrouter.get('/all/:id',getOneUser)

const getAllUser=async(req,res)=>{
    const data =await userSchema.find()
    return res.json(data)
}
serverrouter.get('/all',getAllUser);

const updateUser=async(req,res)=>{
    const {name,email,address,age,phone}=req.body;
 
    
    const change=await userSchema.findOneAndUpdate({
        _id:req.params.id
    },{
        name,email,address,age,phone
    },{
        new:true
    })
    return res.json({
        change
    })
    
}
serverrouter.put('/update/:id',updateUser);

const deleteUser=async(req,res)=>{
    
    const deleted=await userSchema.findOneAndDelete({
        _id:req.params.id
    })
    return res.json({
        deleted
    })
}
serverrouter.delete('/delete/:id',deleteUser)

export default serverrouter