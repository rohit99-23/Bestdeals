import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { LocationProvider } from './contexts/LocationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Help from './pages/Help';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AffiliateDisclaimer from './pages/AffiliateDisclaimer';

import { Toaster } from './components/Toast';
import SmartBot from './components/SmartBot';


function App() {
  const [isBotOpen, setIsBotOpen] = React.useState(false);
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <LocationProvider>
            <div className="min-h-screen bg-white flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/affiliate-disclaimer" element={<AffiliateDisclaimer />} />
                </Routes>
              </main>
              <Footer />
              <Toaster />
              {/* Floating SmartBot Button */}
              <button
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none"
                style={{ boxShadow: '0 4px 24px 0 rgba(180, 70, 255, 0.15)' }}
                onClick={() => setIsBotOpen(true)}
                aria-label="Open SmartBot"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 8c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h12a2 2 0 012 2v8c0 2.21-3.582 4-8 4z" /></svg>
              </button>
              <SmartBot isOpen={isBotOpen} onClose={() => setIsBotOpen(false)} />
            </div>
          </LocationProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;