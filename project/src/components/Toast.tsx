import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Info, AlertCircle, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

let toastQueue: Toast[] = [];
let setToasts: React.Dispatch<React.SetStateAction<Toast[]>> | null = null;

export function showToast(message: string, type: ToastType = 'info') {
  const toast: Toast = {
    id: Math.random().toString(36).substr(2, 9),
    message,
    type
  };
  
  toastQueue.push(toast);
  if (setToasts) {
    setToasts([...toastQueue]);
  }

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(toast.id);
  }, 5000);
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
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBackgroundColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center p-4 rounded-lg border shadow-lg max-w-md transition-all duration-300 ${getBackgroundColor(toast.type)}`}
        >
          {getIcon(toast.type)}
          <span className="ml-3 text-sm font-medium text-gray-900 flex-1">
            {toast.message}
          </span>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-3 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}