import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from bcrypt
import validator from "validator"



const loginUser = async (req,res) => {
    
}
const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const registerUser = async (req,res) => {
    
    const{name,password,email} = req.body
    try {
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({sucess:false,message:"User already exists"})
        }
        if (!validator.isEmail(email)) {
            return res.json({sucess:false,message:"Please enter a valid Email"})
        }
        if (password.length<8) {
            return res.json({success:false,message:"please enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

     const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
     })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})
    } catch (error) {
        
    }
}
export {loginUser, registerUser}