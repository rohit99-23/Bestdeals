import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const searchSuggestions = [
  'Women Kurti',
  'Men Shirts',
  'Nike Shoes',
  'Summer Dress',
  'iPhone 15 Pro Max',
  'Samsung Galaxy S24',
  'Sony Headphones',
  'LG Smart TV'
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { user, logout } = useAuth();
  const { getCartCount, wishlistItems } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
            <div className="relative">
              <img
                src="/logo- (1).png"
                alt="BESTDEALS Logo"
                className="h-10 w-10 rounded-full shadow-lg border-2 border-cyan-400 bg-white object-contain"
                style={{ background: 'white' }}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
              BESTDEALS
            </span>
          </Link>

          {/* Desktop Search Bar - Only visible on large screens */}
          <div className="hidden xl:block flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch}>
              <div className="relative w-full" ref={searchRef}>
                <div className={`relative w-full transition-all duration-300 ${
                  isSearchFocused ? 'scale-105' : 'scale-100'
                }`}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(e.target.value.length > 0);
                    }}
                    onFocus={() => {
                      setIsSearchFocused(true);
                      setShowSuggestions(searchQuery.length > 0);
                    }}
                    placeholder="Search for products..."
                    className="w-full px-4 py-3 pl-12 pr-20 border-2 border-gray-200 rounded-full focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <button
                    type="submit"
                    className="absolute right-2 top-1.5 bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-4 py-1.5 rounded-full hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Search
                  </button>
                </div>

                {/* Search Suggestions */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    {filteredSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full px-4 py-3 text-left hover:bg-cyan-50 transition-colors flex items-center space-x-3 group"
                      >
                        <Search className="h-4 w-4 text-gray-400 group-hover:text-cyan-500" />
                        <span className="text-gray-700 group-hover:text-cyan-600">{suggestion}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Desktop Navigation - Only visible on large screens */}
          <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-cyan-500 transition-all duration-300 transform hover:scale-110 group">
              <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>
            
            <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-orange-500 transition-all duration-300 transform hover:scale-110 group">
              <Heart className="h-6 w-6 group-hover:animate-pulse" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-cyan-500 transition-all duration-300 transform hover:scale-105">
                  <User className="h-6 w-6" />
                  <span className="text-sm font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 border border-gray-100">
                  <Link to="/profile" className="block px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">Profile</Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-cyan-500 transition-colors hover:scale-105 transform">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-full hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button - Only visible on small/medium screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-gray-600 hover:text-cyan-500 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Only visible on small/medium screens */}
        <div className={`xl:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-full focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 outline-none transition-all duration-300"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </form>

            <div className="space-y-2">
              <Link to="/cart" className="flex items-center space-x-3 p-3 text-gray-600 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all duration-300">
                <ShoppingCart className="h-6 w-6" />
                <span>Cart ({getCartCount()})</span>
              </Link>
              <Link to="/wishlist" className="flex items-center space-x-3 p-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-300">
                <Heart className="h-6 w-6" />
                <span>Wishlist ({wishlistItems.length})</span>
              </Link>
              
              {user ? (
                <>
                  <Link to="/profile" className="flex items-center space-x-3 p-3 text-gray-600 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all duration-300">
                    <User className="h-6 w-6" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-3 p-3 text-gray-600 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all duration-300 w-full text-left"
                  >
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <Link to="/login" className="block p-3 text-gray-600 hover:text-cyan-500 hover:bg-cyan-50 rounded-lg transition-all duration-300">
                    Login
                  </Link>
                  <Link to="/signup" className="block p-3 bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-lg text-center hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}