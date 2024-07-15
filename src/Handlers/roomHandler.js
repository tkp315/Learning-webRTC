import { Socket } from "socket.io";

const roomHandler = (socket)=>{

    const createRoom = ()=>{
    const roomId = crypto.randomUUID();//this will be our unique room id in which multiple connection will exchange
    socket.join(roomId); // we will make socket connection enter a new room 
    socket.emit("room-created",roomId); // used to send events to the clients
    console.log("Room is created with id : ",roomId)
    }

    const joinRoom =(roomId)=>{
        console.log("new user joined a room ",roomId);
    }

// we have to call the functions when the client will emit events to create room and join room
    socket.on("create-room",createRoom);
    socket.on("join-room",joinRoom);
}

export default roomHandler;