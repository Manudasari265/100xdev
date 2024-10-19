import { useEffect, useState } from "react";

export default function usePostTitle() {
    const [post, setPost] = useState({});
    
    async function getPosts() {
        const response = await fetch("");
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return <div>
        {post.title}
    </div>
}