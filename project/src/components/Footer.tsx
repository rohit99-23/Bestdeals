import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <ThumbsUp className="h-8 w-8 text-orange-500 transform rotate-12" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                BESTDEALS
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Compare prices across India's top e-commerce platforms and save money on every purchase. Find the best deals on mobiles, fashion, electronics, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/search?category=mobiles" className="text-gray-400 hover:text-orange-500 transition-colors">Mobiles</Link></li>
              <li><Link to="/search?category=fashion" className="text-gray-400 hover:text-orange-500 transition-colors">Fashion</Link></li>
              <li><Link to="/search?category=electronics" className="text-gray-400 hover:text-orange-500 transition-colors">Electronics</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-orange-500 transition-colors">Cart</Link></li>
              <li><Link to="/wishlist" className="text-gray-400 hover:text-orange-500 transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/affiliate-disclaimer" className="text-gray-400 hover:text-orange-500 transition-colors">Affiliate Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">support@bestdeals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 BESTDEALS. All rights reserved.</p>
          <p className="mt-2">
            We earn commissions through affiliate links. This helps us keep our service free for you.
          </p>
        </div>
      </div>
    </footer>
  );
}