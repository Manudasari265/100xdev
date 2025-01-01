import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
    port: 8080,
})

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`received: ${message}`);
        ws.send('echo:' + message);
    })
})

wss.on('listening', () => {
    console.log('ws server is listening on port 8080');
});