/* eslint-disable react/display-name */
"use client";

import axios from "axios"

/* eslint-disable import/no-anonymous-default-export */
export default function() {
    return <div>
        Sign in page <br />
        <input type="text" />
        <input type="text" />
        <button onClick={async () => {
            const res = await axios.post("http://localhost:3000/api/signin", {
                username: "manoj",
                password: "123123"
            })

            localStorage.setItem("token", res.data.token);
        }}>
            Sign in
        </button>
    </div>
}