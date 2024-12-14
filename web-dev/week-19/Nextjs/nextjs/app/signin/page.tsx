"use client";

import { useState } from "react";

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="border p-2">
            <input type="text" onChange={e => {
                setUsername(e.target.value);
            }}/>
            <input type="text" onChange={e => {
                setPassword(e.target.value);
            }}/>

            <button onClick={() => {
                axios.get("http://localhost:300/api/v1/signin", {
                    username,
                    password
                })
            }}>Sign in </button>
        </div>
    </div>
}