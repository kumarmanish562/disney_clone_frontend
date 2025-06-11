import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Export the context directly
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user is already logged in on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (token) {
          // Optional: Validate token with your backend
          // const response = await axios.get('/api/auth/validate-token');
          // setUser(response.data.user);
          
          // For now, just set basic user info from local storage
          const userData = localStorage.getItem('userData');
          if (userData) {
            setUser(JSON.parse(userData));
          }
        }
      } catch (err) {
        console.error('Auth status check failed:', err);
        // Clear invalid tokens
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/auth/login', { email, password });
      
      const { token, user } = response.data;
      
      // Store token and user data
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      
      setUser(user);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      return false;
    }
  };

  const signup = async (userData) => {
    setError(null);
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/auth/signup', userData);
      
      const { token, user } = response.data;
      
      // Store token and user data
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      
      setUser(user);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
      return false;
    }
  };

  const logout = () => {
    // Clear stored data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Reset state
    setUser(null);
  };

  // Create value object with all context data
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    signup,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};