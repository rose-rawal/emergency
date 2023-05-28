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
    const {email}=await req.body;
    const found=await userSchema.findOne({email})
    if(found){
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
router.get('/login',login)
export default router