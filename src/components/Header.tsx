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
            <Link to="/" className="flex items-center">
              <img
                src="https://ik.imagekit.io/6397z4kdz/WhatsApp%20Image%202025-12-03%20at%2011.40.36_9fe055b5.jpg?updatedAt=1764743750720"
                alt="SimplyFunded"
                className="h-10"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">Product</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">About Us</Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">Contact</Link>
            <Link
              to="/apply"
              className="bg-[#2b5fcc] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e4ba8] transition-all hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
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
            <Link to="/" className="block text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">Product</Link>
            <Link to="/about" className="block text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">About Us</Link>
            <Link to="/faq" className="block text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">FAQ</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-[#2b5fcc] transition-colors font-medium">Contact</Link>
            <Link
              to="/apply"
              className="block w-full bg-[#2b5fcc] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e4ba8] transition-all text-center"
            >
              Apply Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
