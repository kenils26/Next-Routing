export const revalidate = 10;

export default async function ISRPage({ params }) {
    const {blogId} = await params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`
    );

    const timeRes = await fetch(
        `https://time.now/developer/api/timezone/Asia/Kolkata`,
        { next: { revalidate: 10 } }
    );
    const timeData = await timeRes.json();


    const post = await res.json();
    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>ISR Blog</h1>
        <h3>Title:</h3>
        <p>{post.title}</p>
        <h3>Body:</h3>
        <p>{post.body}</p>
        <p>Current API Time: {timeData.datetime}</p>
        </div>
    );
}
