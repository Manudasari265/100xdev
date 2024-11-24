import { useEffect } from "react"

export default function HomePage() {
    useEffect(() => {
        const ws = new WebSocket("ws:localhost:8080");
        ws.onopen = () => {
            ws.send('Hello Server!');
        }
        ws.onmessage = (message) => {
            console.log('Message received: ', message.data);
        }
    },[])


    return <div className="h-screen bg-black">
        <div className="h-[95vh]"></div>
        <div className="w-full bg-white flex">
            <input className="flex-1 p-4" type="text" />
            <button className="bg-purple-600 text-white p-4">Send message</button>
        </div>
        
    </div>
}