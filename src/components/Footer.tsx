import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="size-8 text-[#1f6feb]" />
              <span className="text-[#1f6feb]">BookStore</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your trusted online bookstore for discovering and purchasing your next great read.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/?category=All" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-gray-900">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1f6feb] text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-gray-900">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-[#1f6feb]">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1f6feb]">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1f6feb]">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1f6feb]">
                <Mail className="size-5" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for updates and special offers.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
