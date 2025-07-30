import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Zap, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, trendingDeals, bestDeals } from '../data/mockData';

export default function Homepage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/search?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find the <span className="text-yellow-300">Best Deals</span> Across India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Compare prices from Amazon, Flipkart, Meesho, Myntra & more
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for mobiles, fashion, electronics..."
                className="w-full px-6 py-4 text-lg rounded-full text-gray-900 focus:ring-4 focus:ring-yellow-300 outline-none"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const query = (e.target as HTMLInputElement).value;
                    if (query.trim()) {
                      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
                    }
                  }
                }}
              />
              <Search className="absolute right-4 top-4 h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                  {category.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Deals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900">Trending Deals</h2>
            </div>
            <Link
              to="/search?trending=true"
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center space-x-2"
            >
              <span>View All</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-pink-500" />
              <h2 className="text-3xl font-bold text-gray-900">Lightning Deals</h2>
            </div>
            <Link
              to="/search?deals=true"
              className="text-pink-500 hover:text-pink-600 font-medium flex items-center space-x-2"
            >
              <span>View All</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose BESTDEALS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Price Comparison</h3>
              <p className="text-gray-600">
                Compare prices across all major Indian e-commerce platforms in one place
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Deals Guaranteed</h3>
              <p className="text-gray-600">
                Find the lowest prices and exclusive deals you won't find anywhere else
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Price Drop Alerts</h3>
              <p className="text-gray-600">
                Get notified when prices drop on your favorite products
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}