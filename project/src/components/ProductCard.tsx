import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, TrendingUp, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
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

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, wishlistItems } = useCart();
  const { user } = useAuth();
  
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const lowestPricePlatform = product.prices.find(p => p.price === lowestPrice);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleAddToWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isInWishlist 
              ? 'bg-pink-500 text-white' 
              : 'bg-white text-gray-600 hover:text-pink-500'
          }`}
        >
          <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-600">{product.reviews} reviews</span>
        </div>

        <div className="space-y-2 mb-4">
          {product.prices.slice(0, 3).map((price, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src={price.logo} alt={price.platform} className="h-5 w-5" />
                <span className="text-sm text-gray-600">{price.platform}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`font-semibold ${price.price === lowestPrice ? 'text-green-600' : 'text-gray-900'}`}>
                  ₹{price.price.toLocaleString()}
                </span>
                {price.price === lowestPrice && (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}