import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Side - Web Development Text */}
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold">Web Development Portfolio</h2>
            <p className="mt-1 text-gray-400">Showcasing my expertise in web design & development</p>
          </div>

          {/* Right Side - Social Media and Contact Info */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex justify-center space-x-4 animate-bounce">
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          
                <FaFacebook className="text-2xl md:text-3xl text-blue-600 hover:text-blue-400" />
             
              </Link>
              <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl md:text-3xl text-blue-400 hover:text-blue-300" />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl md:text-3xl text-[#0077b5]" />
              </Link>
              <Link href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl md:text-3xl text-gray-300 hover:text-gray-500" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="mailto:ridarasheed58@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-gray-400">
                <FaEnvelope className="text-2xl" />
                <span className="text-sm md:text-base">ridarasheed58@gmail.com</span>
              </a>
              <a href="https://wa.me/03131040410" className="flex items-center space-x-2 text-gray-300 hover:text-gray-400">
                <FaWhatsapp className="text-3xl text-green-500" />
                <span className="text-sm md:text-base">03131040410</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Rida Rasheed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
