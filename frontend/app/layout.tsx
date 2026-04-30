import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav className="navbar">

          <Link href="/" className="nav-logo">
            <img
              src="https://picsum.photos/50"
              alt="logo"
            />
            <span>NEXUS STORE</span>
          </Link>

          <div className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/transactions">Transactions</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}