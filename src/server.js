import dotenv from 'dotenv'
import app from './app.js';
import http from 'http'
import { Server } from 'socket.io';
import roomHandler from './Handlers/roomHandler.js';


dotenv.config({path:"./.env"})



const port = process.env.PORT||8003;

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})
let idx=1;
io.on("connection",(socket)=>{
    idx++;
    console.log(`New user connected ${idx}`);
    roomHandler(socket)
    socket.on("disconnect",()=>{
        console.log("User disconnected");
    })
})

server.listen(port,()=>
{
 console.log(`Hello !! server is listening at port ${port}`);
})