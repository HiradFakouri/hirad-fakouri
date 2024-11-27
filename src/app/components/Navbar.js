'use client';

// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800">
    <h1 className="text-xl font-bold">My Bio</h1>
    <ul className="flex space-x-6">
  <li>
    <Link href="/" className="hover:text-teal-400">
      Home
    </Link>
  </li>
  <li>
    <Link href="/about" className="hover:text-teal-400">
      About Me
    </Link>
  </li>
  <li>
    <Link href="/projects" className="hover:text-teal-400">
      Projects
    </Link>
  </li>
</ul>
  </nav>

  
  );
}