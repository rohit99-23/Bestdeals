import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import app from '../firebase';

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (email: string, newPassword: string) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to get stored users
const getStoredUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Helper function to save users
const saveUsers = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      const currentUser = JSON.parse(userData);
      // Verify user still exists in our stored users
      const users = getStoredUsers();
      const userExists = users.find(u => u.id === currentUser.id && u.email === currentUser.email);
      
      if (userExists) {
        setUser(currentUser);
      } else {
        // User no longer exists, clear session
        logout();
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get stored users
      const users = getStoredUsers();
      
      // Find user by email
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (!existingUser) {
        return false; // User doesn't exist
      }
      
      // Check password
      if (existingUser.password !== password) {
        return false; // Wrong password
      }
      
      // Create user data without password
      const userData = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name
      };
      
      const token = 'jwt_token_' + Math.random().toString(36).substr(2, 15);
      
      Cookies.set('authToken', token, { expires: 7 });
      localStorage.setItem('userData', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error) {
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Set display name
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      // Set user data
      const userData = {
        id: userCredential.user.uid,
        email: userCredential.user.email || '',
        name: name
      };
      Cookies.set('authToken', await userCredential.user.getIdToken(), { expires: 7 });
      localStorage.setItem('userData', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error: any) {
      // Optionally, log error for debugging
      console.error('Firebase signup error:', error);
      return false;
    }
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get stored users
      const users = getStoredUsers();
      
      // Check if user exists
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (!existingUser) {
        return false; // User doesn't exist
      }
      
      // In a real app, you would send an email with reset link
      // For demo purposes, we'll just return true
      return true;
    } catch (error) {
      return false;
    }
  };

  const resetPassword = async (email: string, newPassword: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get stored users
      const users = getStoredUsers();
      
      // Find user
      const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (userIndex === -1) {
        return false; // User doesn't exist
      }
      
      // Update password
      users[userIndex].password = newPassword;
      saveUsers(users);
      
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    Cookies.remove('authToken');
    localStorage.removeItem('userData');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      forgotPassword, 
      resetPassword, 
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}