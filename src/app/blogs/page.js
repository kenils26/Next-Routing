import Link from "next/link";

const Blogs = () => {
  console.log("Blogs Page");
  return (
    <>
      <div>
        <h1>Welcome to Our Blog</h1>
        <ol className="blog-links">
          <li>
            <Link href="/blogs/ssg/1">SSG - Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/isr/51">ISR - Blog 51</Link>
          </li>
          <li>
            <Link href="/blogs/ssr/71">SSR - Blog 71</Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Blogs;
