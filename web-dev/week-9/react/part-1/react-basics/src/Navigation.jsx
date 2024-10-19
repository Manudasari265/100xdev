import { useEffect, useState } from "react"

export function Navigation() {
    const [currentTab, setCurrentTab] = useState("feed");
    const [tabData, setTabData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        console.log("Send request to backend to get the data from " + currentTab);
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/1' + currentTab)
          .then(async response => {
            const json = await response.json();
            setTabData(json);
            setLoading(false);
          });
    }, [currentTab]) 

    return <div>
        <button onClick={() => setCurrentTab("feed")} style={{ 
            color: currentTab == "feed" ? "red" : "black",
            cursor: "pointer",
            fontSize: "15px",
          }}>Feed
        </button>
        <button onClick={() => setCurrentTab("notifications")} style={{ 
            color: currentTab == "notifications" ? "red" : "black",
            cursor: "pointer",
            fontSize: "15px",
          }}>Notifications
        </button>
        <button onClick={() => setCurrentTab("messages")} style={{ 
            color: currentTab == "messages" ? "red" : "black",
            cursor: "pointer",
            fontSize: "15px",
          }}>Messages
        </button>
        <button onClick={() => setCurrentTab("jobs")} style={{ 
            color: currentTab == "jobs" ? "red" : "black",
            cursor: "pointer",
            fontSize: "15px",
          }}>Jobs
        </button>
        <br />
        { loading ? "Loading...." : tabData.title}
    </div>
}