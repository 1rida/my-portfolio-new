"use client";

// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
            Rida Rasheed
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation for Larger Screens */}
        <nav className="hidden lg:flex text-center space-x-8">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Download CV for Larger Screens */}
        <div className="hidden lg:block text-sm">
        <Link href="/ridaa.cv.pdf" passHref
  
    className="inline-block bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-all duration-300 animate-bounce"
    download
  >
    👉Download CV
 
</Link>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-gray-700 text-center space-y-6 py-6 mt-2">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
            <Link href="/ridaa.cv.pdf" passHref
  
  className="inline-block bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition-all duration-300 animate-bounce"
  download
>
  👉Download CV

</Link>

            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
