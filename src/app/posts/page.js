import Counter from "../../components/counter";

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return (
    <div>
      <h2>Posts Page</h2>
      <Counter posts={posts} />
    </div>
  );
}
