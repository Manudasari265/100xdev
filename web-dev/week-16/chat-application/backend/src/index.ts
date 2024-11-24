import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];

wss.on('connection', (socket: WebSocket) => {
    allSockets.push(socket);

    userCount += 1;
    console.log(`User connected ${userCount}`);

    // event handler - 'message'
    socket.on("message", (message) => {
        console.log("message received: " + message.toString());

        socket.send(message.toString() + " :sent from the server");
        allSockets.forEach(sockets => {
            sockets.send(message.toString() + ": sent from the server");
        })
    })
})