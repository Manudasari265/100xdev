export default async function BlogPage({params}: {
    params: {
        blogId: string,
    }
}) {
    const postId = params.blogId;

    return <div>
        Blog Page {postId}
    </div>
}