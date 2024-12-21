import axios from "axios";

export default async function BlogPage({params}: {
    params: Promise<{
        blogId: string,
    }>
}) {
    const postId = (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = response.data;

    return <div>
        Blog Page {JSON.stringify(postId)}
        <br />
        title - {data.title}
        body - {data.body}
    </div>
}