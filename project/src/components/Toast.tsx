import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Info, AlertCircle, X, Sparkles } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  progress: number;
}

let toastQueue: Toast[] = [];
let setToasts: React.Dispatch<React.SetStateAction<Toast[]>> | null = null;

export function showToast(message: string, type: ToastType = 'info') {
  const toast: Toast = {
    id: Math.random().toString(36).substr(2, 9),
    message,
    type,
    progress: 100
  };
  
  toastQueue.push(toast);
  if (setToasts) {
    setToasts([...toastQueue]);
  }

  // Start progress bar
  const startTime = Date.now();
  const duration = 5000; // 5 seconds
  
  const progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const newProgress = Math.max(0, 100 - (elapsed / duration) * 100);
    
    toastQueue = toastQueue.map(t => 
      t.id === toast.id ? { ...t, progress: newProgress } : t
    );
    
    if (setToasts) {
      setToasts([...toastQueue]);
    }
    
    if (newProgress <= 0) {
      clearInterval(progressInterval);
      removeToast(toast.id);
    }
  }, 50);
}

function removeToast(id: string) {
  toastQueue = toastQueue.filter(toast => toast.id !== id);
  if (setToasts) {
    setToasts([...toastQueue]);
  }
}

export function Toaster() {
  const [toasts, setToastsState] = useState<Toast[]>([]);

  useEffect(() => {
    setToasts = setToastsState;
    return () => {
      setToasts = null;
    };
  }, []);

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'error':
        return <XCircle className="h-6 w-6 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
      default:
        return <Info className="h-6 w-6 text-blue-500" />;
    }
  };

  const getBackgroundColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200';
      case 'error':
        return 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200';
      default:
        return 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200';
    }
  };

  const getProgressColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getTitle = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'Success!';
      case 'error':
        return 'Error!';
      case 'warning':
        return 'Warning!';
      default:
        return 'Info';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className={`relative overflow-hidden rounded-xl border shadow-2xl backdrop-blur-sm transition-all duration-500 transform ${
            getBackgroundColor(toast.type)
          } animate-in slide-in-from-right-full duration-500`}
          style={{ 
            animationDelay: `${index * 100}ms`,
            maxWidth: '400px'
          }}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
            <div 
              className={`h-full transition-all duration-100 ease-linear ${getProgressColor(toast.type)}`}
              style={{ width: `${toast.progress}%` }}
            />
          </div>

          {/* Toast Content */}
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {getIcon(toast.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {getTitle(toast.type)}
                  </p>
                  <button
                    onClick={() => removeToast(toast.id)}
                    className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  {toast.message}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 opacity-10">
            <Sparkles className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
}