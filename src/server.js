import dotenv from 'dotenv'
import app from './app.js';
import http from 'http'
import { Server } from 'socket.io';


dotenv.config({path:"./.env"})



const port = process.env.PORT||8003;

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket)=>{
    console.log(`New use connected`);

    socket.on("disconnect",()=>{
        console.log("User disconnected");
    })
})

server.listen(port,()=>
{
 console.log(`Hello !! server is listening at port ${port}`);
})