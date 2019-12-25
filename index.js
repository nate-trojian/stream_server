//https://dev.to/captainpandaz/a-socket-io-tutorial-that-isn-t-a-chat-app-with-react-js-58jh
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001
//NAL break to make each clip appear like it's own file
// Only needed for Broadway Player
const NALseparator = new Buffer([0,0,0,1]) //NAL break

//Setting up express and adding socketIo middleware
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
    console.log("New client connected")

    //Here we listen on a new namespace called "incoming data"
    socket.on("video_in", (data)=>{
       //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
       socket.broadcast.emit("video_out", Buffer.concat(NALseparator, data))
    })

    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => console.log("Client disconnected"))
})

server.listen(port, () => console.log(`Listening on port ${port}`))
