// import { WebSocket, WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 8080 });

// interface User {
//     socket: WebSocket;
//     room: string;
// }

// let userCount = 0;
// let allSockets: User[] = []; //TODO: use MAPS, RECORDS here

// wss.on('connection', (sockets: User) => {
//     allSockets.push(sockets);

//     userCount += 1;
//     console.log(`User connected ${userCount}`);

//      event handler - 'message'
//     sockets.on("message", (message) => {
//         const parsedMessage = JSON.parse(message as unknown as string);
//         if(parsedMessage.type === "join") {
//             allSockets.push({
//                 socket,
//                 room: parsedMessage.payload.roomId,
//                 roomId
//             })
//         }

//         if(parsedMessage.type === "chat") {
//             const currentUserRoom = allSockets.find((x) => s.socket == sockets)?.room

//             allSockets.forEach(userRoom => {

//             })
//         }
//         console.log("message received: " + message.toString());

//         sockets.send(message.toString() + " :sent from the server");
//         allSockets.forEach(sockets => {
//             sockets.send(message.toString() + ": sent from the server");
//         })
//     })

//     sockets.on("disconnect", () => {
//         allSockets = allSockets.filter(x => x != sockets);
//     })
//     //TODO Add room logic after this end-point
// })

import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        // @ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            console.log("user joined room " + parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if (parsedMessage.type == "chat") {
            console.log("user wants to chat");
            // const currentUserRoom = allSockets.find((x) => x.socket == socket).room
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room
                }
            }

            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }

    })

})