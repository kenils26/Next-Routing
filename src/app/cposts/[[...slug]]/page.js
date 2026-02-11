export default async function Page({ params }) {
    const {slug} = await params;
    console.log(`Slug: ${slug}`);

    if(!slug){
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      
        const posts = await res.json();
      
        return (
          <div>
            <h2>Posts Page</h2>
            {posts.slice(0, 5).map(post => (
              <p key={post.id}>{post.title}</p>
            ))}
          </div>
        );
    }

    if (slug.length === 1) {
      const postId = slug[0];

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await res.json();

      return (
        <div>
          <h1>Post Details</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    }

  
    if (slug.length === 2 && slug[1] === "comments") {
      const postId = slug[0];

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const comments = await res.json();

      return (
        <div>
          <h1>All Comments</h1>
          {comments.map(comment => (
            <div key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      );
    }

  
    if (slug.length === 3 && slug[1] === "comments") {
      const commentId = slug[2];

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`
      );
      const comment = await res.json();

      return (
        <div>
          <h1>Single Comment</h1>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      );
    }

    return <h1>Invalid Route</h1>;
}

