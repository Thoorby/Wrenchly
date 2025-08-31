import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/assistant" className="hover:underline">Assistant</Link>
      <Link href="/mechanics" className="hover:underline">Mechanics</Link>
      <Link href="/book" className="hover:underline">Book</Link>
      <Link href="/profile" className="hover:underline">Profile</Link>
    </nav>
  );
}
