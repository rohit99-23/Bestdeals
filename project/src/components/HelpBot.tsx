import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface HelpBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const commonQueries = [
  {
    question: "How do I compare prices?",
    answer: "Simply search for any product and you'll see prices from Amazon, Flipkart, Meesho, and other platforms. Click on any price to go directly to that platform."
  },
  {
    question: "Is BESTDEALS free to use?",
    answer: "Yes! BESTDEALS is completely free. We don't charge any fees for price comparison or using our platform."
  },
  {
    question: "How accurate are the prices?",
    answer: "We update prices regularly, but prices can change quickly. Always verify the final price on the platform before making a purchase."
  },
  {
    question: "Can I save products for later?",
    answer: "Yes! You can add products to your wishlist by clicking the heart icon. You can also add items to your cart for easy checkout."
  },
  {
    question: "How do I create an account?",
    answer: "Click on 'Login' in the header, then select 'Sign Up' to create your account. It only takes a minute!"
  },
  {
    question: "What if I find a better price elsewhere?",
    answer: "If you find a better price, please let us know! We're always working to improve our price coverage and accuracy."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact us through the Help section in your profile, or use this chat for quick questions. We're here to help!"
  }
];

export default function HelpBot({ isOpen, onClose }: HelpBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your BESTDEALS assistant. How can I help you today? You can ask me about price comparison, account features, or any other questions!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findBestAnswer = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const query of commonQueries) {
      if (lowerMessage.includes(query.question.toLowerCase())) {
        return query.answer;
      }
    }

    // Check for keywords
    if (lowerMessage.includes('price') || lowerMessage.includes('compare')) {
      return commonQueries[0].answer;
    }
    if (lowerMessage.includes('free') || lowerMessage.includes('cost')) {
      return commonQueries[1].answer;
    }
    if (lowerMessage.includes('accurate') || lowerMessage.includes('real')) {
      return commonQueries[2].answer;
    }
    if (lowerMessage.includes('save') || lowerMessage.includes('wishlist')) {
      return commonQueries[3].answer;
    }
    if (lowerMessage.includes('account') || lowerMessage.includes('sign up') || lowerMessage.includes('register')) {
      return commonQueries[4].answer;
    }
    if (lowerMessage.includes('better price') || lowerMessage.includes('cheaper')) {
      return commonQueries[5].answer;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return commonQueries[6].answer;
    }

    // Default response
    return "I'm not sure I understand. Could you try rephrasing your question? You can ask me about price comparison, account features, or how to use BESTDEALS.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const botResponse = findBestAnswer(userMessage.text);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "How do I compare prices?",
    "Is BESTDEALS free?",
    "How accurate are prices?",
    "How do I save products?"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">BESTDEALS Assistant</h3>
              <p className="text-sm text-cyan-100">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-orange-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-cyan-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                  <span className="text-sm text-gray-500">Typing...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(question)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="p-2 bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-full hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 