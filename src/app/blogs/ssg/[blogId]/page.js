export async function generateStaticParams() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await res.json();

    return posts.slice(0, 50).map(({ id }) => ({
        blogID: String(id),
    }));
}

export default async function SSGPage({ params }) {
    const {blogId} = await params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`,
        { cache: "force-cache" }
    );

    const post = await res.json();
    const buildTime = new Date().toLocaleString();

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>SSG Blog</h1>
        <h3>Title:</h3>
        <p>{post.title}</p>
        <h3>Body:</h3>
        <p>{post.body}</p>
        <p>Rendered At (Build Time):{buildTime}</p>
        </div>
    );
}
