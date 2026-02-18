export const dynamic = "force-dynamic";

export default async function SSRPage({ params }) {
    const {blogId} = await params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`,
        { cache: "no-store" }
    );

    const post = await res.json();
    const renderTime = new Date().toLocaleString();

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>SSR Blog</h1>
        <h3>Title:</h3>
        <p>{post.title}</p>
        <h3>Body:</h3>
        <p>{post.body}</p>
        <p>Rendered At: {renderTime}</p>
        </div>
    );
}
