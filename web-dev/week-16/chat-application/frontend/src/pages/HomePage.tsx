import { useEffect } from "react"

export default function HomePage() {
    useEffect(() => {
        const ws = new WebSocket("ws:localhost:8080");
        ws.onopen = () => {
            
        }
    },[])


    return <div>
        hi there!
    </div>
}