import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema=new Schema({
    username:{
        required:true,
        type:String,
        index:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    email:{
        required:true,
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        required:true,
        type:String,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudinary url
        required:true,
    },
    coverImage:{
        type:String,
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }
},{
    timestamps:true
})

//bcrypt-used for encryption of password
//it's a middle ware (pre hook) before "save"

userSchema.pre("save",async function (next){
    if(!this.isModified("password"))return next()//agar modify nahi hua toh return
    this.password=bcrypt(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){}

userSchema.methods.generateRefreshToken=function(){}

export const User = mongoose.model("User",userSchema)