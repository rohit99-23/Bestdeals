import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Save, 
  X, 
  Star, 
  MessageCircle, 
  HelpCircle, 
  Settings, 
  LogOut,
  Navigation,
  Heart,
  ShoppingCart,
  Package,
  Award,
  Calendar,
  Eye,
  ThumbsUp
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from '../contexts/LocationContext';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../components/Toast';

interface UserStats {
  totalOrders: number;
  totalSpent: number;
  savedAmount: number;
  wishlistItems: number;
  cartItems: number;
  memberSince: string;
}

export default function Profile() {
  const { user, logout } = useAuth();
  const { location, loading: locationLoading, error: locationError, getCurrentLocation } = useLocation();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  
  const [userStats] = useState<UserStats>({
    totalOrders: 24,
    totalSpent: 45600,
    savedAmount: 8900,
    wishlistItems: 12,
    cartItems: 3,
    memberSince: 'March 2024'
  });

  const [userRating] = useState(4.8);
  const [totalReviews] = useState(156);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSave = () => {
    // In a real app, you would update the user data here
    showToast('Profile updated successfully!', 'success');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    showToast('Logged out successfully!', 'success');
  };

  const handleLocationPermission = async () => {
    try {
      await getCurrentLocation();
      showToast('Location updated successfully!', 'success');
    } catch (error) {
      showToast('Failed to get location. Please check permissions.', 'error');
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#cfc0c0]">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full flex items-center justify-center">
                <ThumbsUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                <p className="text-gray-600">Manage your account and preferences</p>
              </div>
            </div>
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(userRating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {userRating} ({totalReviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Edit className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Profile Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) => setEditedUser(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-lg">
                        <User className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-900">{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedUser.email}
                        onChange={(e) => setEditedUser(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-lg">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-900">{user.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedUser.phone}
                        onChange={(e) => setEditedUser(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-lg">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-900">{user.phone || 'Not provided'}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Member Since
                    </label>
                    <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{userStats.memberSince}</span>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                  <div className="space-y-4">
                    {location ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-800">Current Location</span>
                        </div>
                        <p className="text-green-700">
                          {location.city && location.state 
                            ? `${location.city}, ${location.state}`
                            : location.address || 'Location detected'
                          }
                        </p>
                        <button
                          onClick={handleLocationPermission}
                          disabled={locationLoading}
                          className="mt-2 text-sm text-green-600 hover:text-green-700 font-medium"
                        >
                          {locationLoading ? 'Updating...' : 'Update Location'}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Navigation className="h-5 w-5 text-yellow-600" />
                          <span className="font-medium text-yellow-800">Location Not Set</span>
                        </div>
                        <p className="text-yellow-700 mb-3">
                          Enable location to get personalized deals and faster delivery options.
                        </p>
                        <button
                          onClick={handleLocationPermission}
                          disabled={locationLoading}
                          className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50"
                        >
                          {locationLoading ? 'Getting Location...' : 'Enable Location'}
                        </button>
                      </div>
                    )}
                    {locationError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm">{locationError}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                {isEditing && (
                  <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-600">Total Orders</span>
                  </div>
                  <span className="font-semibold text-gray-900">{userStats.totalOrders}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600">Total Spent</span>
                  </div>
                  <span className="font-semibold text-gray-900">₹{userStats.totalSpent.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Money Saved</span>
                  </div>
                  <span className="font-semibold text-green-600">₹{userStats.savedAmount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600">Wishlist Items</span>
                  </div>
                  <span className="font-semibold text-gray-900">{userStats.wishlistItems}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">Cart Items</span>
                  </div>
                  <span className="font-semibold text-gray-900">{userStats.cartItems}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/help"
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <HelpCircle className="h-5 w-5 text-cyan-500" />
                  <span className="text-gray-700">Help & Support</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">My Wishlist</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <ShoppingCart className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">My Cart</span>
                </Link>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left"
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="text-red-600">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}