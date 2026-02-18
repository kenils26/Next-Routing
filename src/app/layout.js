import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link active">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      {children}
      </body>
    </html>
  );
}
