import { Phone, MapPin, Mail } from 'lucide-react';

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
              <li><a href="#home" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Products</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Contact</a></li>
              <li><a href="#connect" className="text-gray-400 hover:text-[#2b5fcc] transition-colors">Connect</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="text-[#2b5fcc] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">01642 057 445</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#2b5fcc] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">
                  E.Volve Business Centre, Cygnet Way, Houghton le Spring, DH4 5QY, UK
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-[#2b5fcc] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">applications@simplyfunded.co.uk</span>
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
