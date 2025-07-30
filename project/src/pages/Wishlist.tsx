import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../components/Toast';

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      platform: item.platform
    });
    showToast('Added to cart!', 'success');
  };

  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id);
    showToast('Removed from wishlist', 'info');
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Heart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Please log in to view your wishlist</h2>
          <p className="text-gray-600 mb-8">Save your favorite products and access them anytime</p>
          <Link
            to="/login"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Heart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Add products you love to your wishlist</p>
          <Link
            to="/"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">{wishlistItems.length} items saved</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 text-red-500 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4">
              <Link to={`/product/${item.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-500 transition-colors line-clamp-2">
                  {item.name}
                </h3>
              </Link>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-bold text-orange-500">₹{item.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">on {item.platform}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
                <Link
                  to={`/product/${item.id}`}
                  className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}