import {Router} from 'express'
import userSchema from '../models/userSchema.js'
import {decrypt} from '../utils/decrypt.js'
import {encrypt} from '../utils/encrypt.js'
const router = Router()
async function registerUser(req,res){
    const {name,password,email,address,age,phone}=req.body
    if(!name||!password||!email||!address||!age||!phone){
        return res.status(400).json({
            success:false,
            message:"missing Field"
        })
    }
    const exist=await userSchema.exists({
        email
    })
    if(exist){
        return res.status(400).json({
            success: false,
            message: "already have email",
            
        })
    }
    const user=userSchema({
        name,password:await encrypt(password),email,address,age,phone
    })
    await user.save();
    const data=await encrypt(password);
    return res.json({
        success:true,
        message:"data added",
        data
    })
    
}
router.post("/register",registerUser)

async function login(req,res){
    const {email,password}=await req.body;
    const found=await userSchema.findOne({email})
    const pass=await decrypt(password,found.password)
    console.log(pass)
    if(found.email===email){
        return res.json({
            success:true,
            message: "user found",
            found
        })
    }
    return res.status(400).json({
        success:false,
        message: "no user found",
        
    })
}

router.post('/login',login)

const getAllUser=async(req,res)=>{
    const data =await userSchema.find()
    return res.json(data)
}
router.get('/all',getAllUser);

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
router.put('/update/:id',updateUser);

const deleteUser=async(req,res)=>{
    
    const deleted=await userSchema.findOneAndDelete({
        _id:req.params.id
    })
    return res.json({
        deleted
    })
}
router.delete('/delete/:id',deleteUser)
export default router