import Link from "next/link";

export default function FeedPage() {
  return (
    <div>
      <h1>Feed Page</h1>

      <Link href="/photo/1">
        <button>Open Photo 1</button>
      </Link>

      <br /><br />

      <Link href="/photo/2">
        <button>Open Photo 2</button>
      </Link>
    </div>
  );
}
