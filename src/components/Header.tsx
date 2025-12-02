import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#3d75ef]">SimplyFunded</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">About Us</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">Products</Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">Contact</Link>
            <a
              href="https://www.simplyfunded.co.uk/application/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3d75ef] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2d5fd0] transition-all hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">About Us</Link>
            <Link to="/products" className="block text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">Products</Link>
            <Link to="/faq" className="block text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">FAQ</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-[#3d75ef] transition-colors font-medium">Contact</Link>
            <a
              href="https://www.simplyfunded.co.uk/application/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#3d75ef] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2d5fd0] transition-all text-center"
            >
              Apply Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
