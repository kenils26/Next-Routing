export default async function Comments({params}) {
    const {id} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments = await res.json();
    return (
        <>
            <div> Comments for Post ID: {id}  ( Nested Route)</div>
            {comments.slice(0, 3).map(comment => (
                <div key={comment.id}>
                    <p> Comment ID: {comment.id} </p>
                    <p> Name: {comment.name} </p>
                    <p> Email: {comment.email} </p>
                    <p> Body: {comment.body} </p>
                </div>
            ))}
        </>
    );
}
