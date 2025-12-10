import { Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#2b5fcc] mb-4">SimplyFunded</h3>
            <p className="text-gray-400 leading-relaxed">
              Fast, flexible business loans for UK SMEs. Funding direct from the lender.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Product</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Contact</Link></li>
              <li><Link to="/apply" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Apply Now</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="text-[#2b5fcc] flex-shrink-0 mt-1" size={18} />
                <a href="tel:01642057445" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">01642 057 445</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#2b5fcc] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">
                  E.Volve Business Centre, Cygnet Way, Houghton le Spring, DH4 5QY, UK
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-[#2b5fcc] flex-shrink-0 mt-1" size={18} />
                <a href="mailto:applications@simplyfunded.co.uk" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">applications@simplyfunded.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-400 space-y-2">
            <p>
              SimplyFunded is a trading name of <strong>Morley Capital Limited</strong>, registered in England & Wales (Company No: 14566089).
            </p>
            <p>
              ICO Registration: ZB499041 | Direct Funder
            </p>
            <p className="pt-4">
              © 2025 SimplyFunded. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
