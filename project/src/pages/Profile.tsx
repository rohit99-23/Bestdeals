import React from 'react';
import { User, Package, Heart, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const { wishlistItems } = useCart();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-orange-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <a href="#orders" className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-700">
                <Package className="h-5 w-5" />
                <span>My Orders</span>
              </a>
              <a href="#wishlist" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <Heart className="h-5 w-5" />
                <span>Wishlist ({wishlistItems.length})</span>
              </a>
              <a href="#alerts" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700">
                <Bell className="h-5 w-5" />
                <span>Price Alerts</span>
              </a>
              <button
                onClick={logout}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 text-red-600 w-full text-left"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Profile Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>
            
            {/* Mock Order History */}
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Order #ORD123456789</h3>
                    <p className="text-sm text-gray-600">Placed on December 15, 2024</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Delivered
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=100&h=100&fit=crop"
                    alt="iPhone 15 Pro Max"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium">iPhone 15 Pro Max 256GB Natural Titanium</p>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                  <p className="font-bold text-lg">₹1,34,900</p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Order #ORD123456788</h3>
                    <p className="text-sm text-gray-600">Placed on December 10, 2024</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Shipped
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
                    alt="Sony Headphones"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Sony WH-1000XM5 Wireless Noise Canceling Headphones</p>
                    <p className="text-sm text-gray-600">Quantity: 1</p>
                  </div>
                  <p className="font-bold text-lg">₹28,990</p>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Account Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}