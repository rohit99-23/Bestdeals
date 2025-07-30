import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, TrendingUp, Share2, Bell } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../components/Toast';
import { products } from '../data/mockData';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart, addToWishlist, wishlistItems } = useCart();
  const { user } = useAuth();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-orange-500 hover:text-orange-600">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

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

  const handleTrackPrice = () => {
    if (!user) {
      showToast('Please login to track prices', 'error');
      return;
    }
    showToast('Price tracking enabled! You\'ll be notified of price drops.', 'success');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!', 'success');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail images would go here in a real implementation */}
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 ${
                  selectedImageIndex === index ? 'border-orange-500' : 'border-transparent'
                }`}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          {/* Price Comparison */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Price Comparison</h3>
            <div className="space-y-3">
              {product.prices.map((price, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={price.logo} alt={price.platform} className="h-8 w-8" />
                    <span className="font-medium">{price.platform}</span>
                    {price.price === lowestPrice && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Best Deal
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-lg font-bold ${
                      price.price === lowestPrice ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      ₹{price.price.toLocaleString()}
                    </span>
                    <a
                      href={price.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            
            <button
              onClick={handleAddToWishlist}
              className={`flex-1 py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                isInWishlist
                  ? 'bg-pink-500 text-white'
                  : 'border border-pink-500 text-pink-500 hover:bg-pink-50'
              }`}
            >
              <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
              <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

          {/* Additional Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleTrackPrice}
              className="flex-1 border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Bell className="h-4 w-4" />
              <span>Track Price</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md p-4">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-orange-500">
                    ₹{Math.min(...relatedProduct.prices.map(p => p.price)).toLocaleString()}
                  </p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}