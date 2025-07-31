import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../components/Toast';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirmPassword?: string }>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; password?: string; confirmPassword?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = () => {
    if (!password) return { strength: 0, color: 'gray', text: '' };
    
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/(?=.*[a-z])/.test(password)) strength++;
    if (/(?=.*[A-Z])/.test(password)) strength++;
    if (/(?=.*\d)/.test(password)) strength++;
    if (/(?=.*[!@#$%^&*])/.test(password)) strength++;

    if (strength <= 2) return { strength, color: 'red', text: 'Weak' };
    if (strength <= 4) return { strength, color: 'yellow', text: 'Medium' };
    return { strength, color: 'green', text: 'Strong' };
  };

  const passwordStrength = getPasswordStrength();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const success = await signup(name, email, password);
      if (success) {
        showToast('Account created successfully! Welcome to BESTDEALS! 🎉', 'success');
        navigate('/');
      } else {
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
        
        if (userExists) {
          showToast('An account with this email already exists. Please sign in instead.', 'error');
      } else {
        showToast('Failed to create account. Please try again.', 'error');
        }
      }
    } catch (error) {
      showToast('Signup failed. Please check your connection and try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    showToast(`${provider} signup coming soon!`, 'info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className={`max-w-md w-full space-y-8 relative transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-orange-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600 text-lg">Join BESTDEALS and start saving money</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  required
                  className={`w-full px-4 py-3 pl-12 pr-4 border-2 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Enter your full name"
                />
                <User className={`absolute left-4 top-3.5 h-5 w-5 transition-colors duration-300 ${
                  errors.name ? 'text-red-400' : 'text-gray-400'
                }`} />
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  required
                  className={`w-full px-4 py-3 pl-12 pr-4 border-2 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Enter your email"
                />
                <Mail className={`absolute left-4 top-3.5 h-5 w-5 transition-colors duration-300 ${
                  errors.email ? 'text-red-400' : 'text-gray-400'
                }`} />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  required
                  className={`w-full px-4 py-3 pl-12 pr-12 border-2 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all duration-300 ${
                    errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Create a password"
                />
                <Lock className={`absolute left-4 top-3.5 h-5 w-5 transition-colors duration-300 ${
                  errors.password ? 'text-red-400' : 'text-gray-400'
                }`} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                {errors.password && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Password strength:</span>
                    <span className={`text-xs font-medium ${
                      passwordStrength.color === 'red' ? 'text-red-600' :
                      passwordStrength.color === 'yellow' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {passwordStrength.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        passwordStrength.color === 'red' ? 'bg-red-500' :
                        passwordStrength.color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(passwordStrength.strength / 6) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-gray-500">
                    <div className="flex items-center">
                      <CheckCircle className={`h-3 w-3 mr-1 ${password.length >= 6 ? 'text-green-500' : 'text-gray-300'}`} />
                      At least 6 characters
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className={`h-3 w-3 mr-1 ${/(?=.*[a-z])/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                      Lowercase letter
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className={`h-3 w-3 mr-1 ${/(?=.*[A-Z])/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                      Uppercase letter
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className={`h-3 w-3 mr-1 ${/(?=.*\d)/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                      Number
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
                  }}
                  required
                  className={`w-full px-4 py-3 pl-12 pr-12 border-2 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all duration-300 ${
                    errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Confirm your password"
                />
                <Lock className={`absolute left-4 top-3.5 h-5 w-5 transition-colors duration-300 ${
                  errors.confirmPassword ? 'text-red-400' : 'text-gray-400'
                }`} />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                {errors.confirmPassword && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/terms-conditions" className="text-orange-500 hover:text-orange-600 hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-orange-500 hover:text-orange-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or sign up with</span>
              </div>
            </div>

            {/* Social Signup Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialSignup('Google')}
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                onClick={() => handleSocialSignup('Facebook')}
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 hover:underline"
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}