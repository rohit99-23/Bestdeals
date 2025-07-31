import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface SmartBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const friendlyReplies = [
  "That's a great question! Let me help you with that.",
  "I'm here for you! What else can I do?",
  "Let me check that for you...",
  "Here's what I found for you!",
  "If you need more help, just ask! 😊"
];

function getRandomReply() {
  return friendlyReplies[Math.floor(Math.random() * friendlyReplies.length)];
}

export default function SmartBot({ isOpen, onClose }: SmartBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! I'm your smart shopping buddy. Ask me anything about deals, products, or how to use the site!",
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
    await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 1000));
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: getRandomReply(),
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[500px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">SmartBot</h3>
              <p className="text-sm text-pink-100">Online • Ask me anything</p>
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
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-pink-100' : 'text-gray-500'
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
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
