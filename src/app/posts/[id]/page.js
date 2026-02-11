export default async function Posts({ params }) {
    const {id} = await params;
    console.log(`Post ID: ${id}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json();
    return (
        <>
            <div> Dynamic Route </div>
            <div> Post : {id} </div>
            <div> Title: {post.title} </div>
            <div> Details: {post.body} </div>
        </>
        );
}
