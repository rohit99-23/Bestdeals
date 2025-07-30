import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Send, 
  Bot, 
  MapPin, 
  Clock, 
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HelpBot from '../components/HelpBot';

interface SupportForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
}

export default function Help() {
  const [activeTab, setActiveTab] = useState<'quick' | 'form' | 'call'>('quick');
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [formData, setFormData] = useState<SupportForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', priority: 'medium' });
    }, 3000);
  };

  const handleInputChange = (field: keyof SupportForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#cfc0c0]">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
              <p className="text-gray-600">We're here to help you with any questions or issues</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => {
              setActiveTab('quick');
              setIsBotOpen(true);
            }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mb-4">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Support</h3>
            <p className="text-gray-600 text-sm">Chat with our AI assistant for instant help</p>
          </button>

          <button
            onClick={() => setActiveTab('form')}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-orange-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us your Problem</h3>
            <p className="text-gray-600 text-sm">Submit a detailed support ticket</p>
          </button>

          <button
            onClick={() => setActiveTab('call')}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-green-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact us via Call</h3>
            <p className="text-gray-600 text-sm">Speak directly with our support team</p>
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          {activeTab === 'form' && (
            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your support ticket has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us your Problem</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Please describe your issue in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Support Ticket</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === 'call' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 text-lg">Get in touch with our support team</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us</h4>
                      <p className="text-lg font-medium text-cyan-600">+91 1800-123-4567</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-lg font-medium text-cyan-600">support@bestdeals.com</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-orange-50 rounded-2xl p-8 border border-cyan-200 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Call?</h4>
                <p className="text-gray-600 mb-6">Our support team is available 24/7 to help you.</p>
                <a
                  href="tel:+9118001234567"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: +91 1800-123-4567</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Help Bot Modal */}
      <HelpBot isOpen={isBotOpen} onClose={() => setIsBotOpen(false)} />
    </div>
  );
} 