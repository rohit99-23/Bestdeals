import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Zap, Star, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import ProductCard, { ProductCardSkeleton } from '../components/ProductCard';
import { categories, trendingDeals, bestDeals, platforms, getTopDealsByPlatform, products } from '../data/mockData';

const platformOrder = ['amazon', 'flipkart', 'meesho', 'myntra', 'ajio'] as const;
type PlatformKey = typeof platformOrder[number];

export default function Homepage() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/search?category=${categoryId}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Get fashion products (priority 1)
  const fashionProducts = products.filter(product => product.category === 'fashion').slice(0, 8);
  
  // Get other products (priority 2+)
  const otherProducts = products.filter(product => product.category !== 'fashion').slice(0, 4);

  return (
    <div className="min-h-screen bg-[#cfc0c0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-orange-500 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-yellow-300 mr-2 animate-pulse" />
              <span className="text-lg font-medium text-yellow-200">India's #1 Price Comparison Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find the <span className="text-yellow-300 animate-pulse">Best Deals</span>
              <br />
              <span className="text-4xl md:text-6xl">Across India</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Compare prices from Amazon, Flipkart, Meesho, Myntra & more to save money on every purchase
            </p>
            
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for fashion, mobiles, electronics..."
                  className="w-full px-8 py-5 text-lg rounded-full text-gray-900 focus:ring-4 focus:ring-cyan-300 outline-none shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
                <Search className="absolute left-6 top-5 h-6 w-6 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated categories to find the best deals on your favorite products
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 overflow-x-auto pb-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex flex-col items-center px-8 py-6 rounded-2xl shadow-lg bg-white border-2 border-transparent hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 group min-w-[140px] transform hover:-translate-y-2 hover:shadow-2xl ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                <span className="text-sm font-semibold text-gray-900 group-hover:text-cyan-500 transition-colors">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Section - PRIORITY 1 */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between mb-16 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Fashion & Style</h2>
                <p className="text-gray-600 mt-1">Trending clothing, shoes & accessories at best prices</p>
              </div>
            </div>
            <Link
              to="/search?category=fashion"
              className="group flex items-center space-x-2 text-cyan-500 hover:text-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Fashion</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fashionProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-1000 delay-${500 + (index * 100)} ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Top Deals Sections */}
      {platformOrder.map((platformKey, platformIndex) => {
        const platform = platforms[platformKey as PlatformKey];
        const deals = getTopDealsByPlatform(platform.name, 4);
        if (!deals.length) return null;
        
        return (
          <section key={platformKey} className={`py-16 ${platformIndex % 2 === 0 ? 'bg-white/60' : 'bg-white/40'} backdrop-blur-sm border-b border-white/20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex items-center mb-12 transition-all duration-1000 delay-${platformIndex * 200} ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="relative">
                  <img src={platform.logo} alt={platform.name} className="w-12 h-12 rounded-full mr-4 shadow-lg" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Top Deals on {platform.name}</h2>
                  <p className="text-gray-600 mt-1">Handpicked offers just for you</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {deals.map((product, productIndex) => (
                  <div
                    key={product.id + platformKey}
                    className={`transition-all duration-1000 delay-${(platformIndex * 100) + (productIndex * 100)} ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Other Products Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between mb-16 transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Other Hot Deals</h2>
                <p className="text-gray-600 mt-1">Electronics, mobiles, home & more</p>
              </div>
            </div>
            <Link
              to="/search"
              className="group flex items-center space-x-2 text-cyan-500 hover:text-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-1000 delay-${700 + (index * 100)} ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose BESTDEALS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help you find the best prices across all major e-commerce platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Price Comparison',
                description: 'Compare prices across Amazon, Flipkart, Meesho & more'
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: 'Best Deals',
                description: 'Find the lowest prices and exclusive offers'
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: 'Save Money',
                description: 'Save up to 70% on your favorite products'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg transition-all duration-1000 delay-${900 + (index * 100)} ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}