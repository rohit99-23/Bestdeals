import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, TrendingUp, Eye, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { showToast } from './Toast';

interface Product {
  id: string;
  name: string;
  image: string;
  prices: {
    platform: string;
    price: number;
    logo: string;
    url: string;
  }[];
  rating: number;
  reviews: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
      <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300" />
      <div className="p-5 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-8" />
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-20" />
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <div className="flex-1 h-12 bg-gray-200 rounded-lg" />
          <div className="w-12 h-12 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { user } = useAuth();
  const { addToCart, cartItems, addToWishlist, wishlistItems } = useCart();

  // Calculate lowest price and discount
  const prices = product.prices.map(p => p.price);
  const lowestPrice = Math.min(...prices);
  const highestPrice = Math.max(...prices);
  const discount = Math.round(((highestPrice - lowestPrice) / highestPrice) * 100);
  
  const lowestPricePlatform = product.prices.find(p => p.price === lowestPrice);
  
  // Check if item is in cart or wishlist
  const isInCart = cartItems.some(item => item.id === product.id);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (!user) {
      showToast('Please login to add to cart', 'error');
      return;
    }

    if (isInCart) {
      showToast('Already in cart', 'info');
      return;
    }

    if (!lowestPricePlatform) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: lowestPrice,
      platform: lowestPricePlatform.platform
    });
    showToast('Added to cart!', 'success');
  };

  const handleAddToWishlist = () => {
    if (!user) {
      showToast('Please login to add to wishlist', 'error');
      return;
    }

    if (isInWishlist) {
      showToast('Already in wishlist', 'info');
      return;
    }

    if (!lowestPricePlatform) return;
    
    addToWishlist({
      id: product.id,
      name: product.name,
      image: product.image,
      price: lowestPrice,
      platform: lowestPricePlatform.platform
    });
    showToast('Added to wishlist!', 'success');
  };

  return (
    <div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
        )}
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-48 object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            -{discount}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={handleAddToWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform ${
            isInWishlist 
              ? 'bg-orange-500 text-white scale-110' 
              : 'bg-white/90 text-gray-600 hover:text-orange-500 hover:bg-white'
          } ${isHovered ? 'opacity-100' : 'opacity-80'}`}
        >
          <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
        
        {/* Quick View Overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span>Quick View</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-cyan-500 transition-colors line-clamp-2 group-hover:line-clamp-none">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{product.reviews.toLocaleString()} reviews</span>
        </div>

        {/* Price Comparison */}
        <div className="space-y-2 mb-4">
          {product.prices.slice(0, 3).map((price, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg transition-colors hover:bg-gray-50">
              <div className="flex items-center space-x-2">
                <img src={price.logo} alt={price.platform} className="h-5 w-5 rounded-full" />
                <span className="text-sm text-gray-600">{price.platform}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`font-bold text-lg ${price.price === lowestPrice ? 'text-green-600' : 'text-gray-900'}`}>
                  ₹{price.price.toLocaleString()}
                </span>
                {price.price === lowestPrice && (
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">Best</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-orange-500 text-white py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="font-medium">Add to Cart</span>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="px-4 py-3 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}