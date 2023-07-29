import express from "express";
import mongoose from 'mongoose'
import ServerlessHttp from 'serverless-http'
import dotenv from 'dotenv';
import router from "./routes/index.js";
import cors from 'cors';
import serverrouter from "./routes/server.js";
import statsRoute from "./routes/statistics.js";
import http from 'http';
import { Server} from "socket.io";

// import router from './routes'
dotenv.config();
const app=express();
const server=http.createServer(app)
const io=new Server(server);
mongoose.connect("mongodb://127.0.0.1:27017/userdata")
.then(()=>{
    console.log("connected to db")
})
.catch(()=>{
    console.log("error in db")
})
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin: true, credentials: true}))
app.use('/',router)
app.use('/server/',serverrouter)
app.use('/statistics/',statsRoute);
// app.use('/hello',router)

app.post('/hello',(req,res)=>{
   res.send("hello",router)
})
export default ServerlessHttp(app)
app.listen(5000,()=>{
    console.log("server on 5000")
})
io.on('connection',(socket)=>{
    console.log("user is connected");
    socket.on('hello',msg=>{
        console.log(msg);
        io.emit('hello',msg)
    })
})
server.listen(4000,()=>{
    console.log("socket server at 4000")
})