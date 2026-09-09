import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))//backend bola localhost:5173(frontend) ko mujhe request karne ki permission hai

app.use(express.json({limit: "16kb"}))//express se json accept karlega
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))//public assets anyone can access
//server de user ki cookies access aur set kar sakte hai aur set kar sakte hai
app.use(cookieParser())

//res lene se pehle check kare ki res le bhi sakte hai ya nahi issi ke liye middle ware use hota hai
//(err,req,res,next) next is middleware

export{ app }

//issi chiz ko baar baar karna hai toh util use karrenge