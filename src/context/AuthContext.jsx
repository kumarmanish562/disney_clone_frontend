import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check for existing user session on mount
  useEffect(() => {
    // Try to get stored user data from localStorage
    const storedUser = localStorage.getItem('disney_user');
    const storedToken = localStorage.getItem('disney_token');
    
    if (storedUser && storedToken) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (e) {
        // If JSON parsing fails, clear localStorage
        localStorage.removeItem('disney_user');
        localStorage.removeItem('disney_token');
      }
    }
    
    setLoading(false);
  }, []);

  // Login function - handles API call and state management
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // Replace with your actual API call
      // const response = await fetch('your-api-url/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      
      // const data = await response.json();
      
      // if (!response.ok) {
      //   throw new Error(data.message || 'Login failed');
      // }

      // Placeholder for testing - replace with actual API response
      const data = {
        user: { id: '123', email, name: 'Test User' },
        token: 'test-token-123'
      };
      
      // Store in localStorage for persistence
      localStorage.setItem('disney_user', JSON.stringify(data.user));
      localStorage.setItem('disney_token', data.token);
      
      setUser(data.user);
      navigate('/'); // Redirect to home page after login
      return true;
    } catch (err) {
      setError(err.message || 'An error occurred during login');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function - clears state and storage
  const logout = () => {
    localStorage.removeItem('disney_user');
    localStorage.removeItem('disney_token');
    setUser(null);
    navigate('/login');
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // Replace with your actual API call
      // const response = await fetch('your-api-url/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, password })
      // });
      
      // const data = await response.json();
      
      // if (!response.ok) {
      //   throw new Error(data.message || 'Registration failed');
      // }

      // Placeholder for testing
      const data = {
        user: { id: '123', email, name },
        token: 'test-token-123'
      };
      
      localStorage.setItem('disney_user', JSON.stringify(data.user));
      localStorage.setItem('disney_token', data.token);
      
      setUser(data.user);
      navigate('/');
      return true;
    } catch (err) {
      setError(err.message || 'An error occurred during registration');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Get the authentication token
  const getToken = () => {
    return localStorage.getItem('disney_token');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        register, 
        loading, 
        error,
        isAuthenticated: !!user,
        getToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Protected route component
export const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return <div className="text-[#00e5ff] font-bold text-center p-8">Loading...</div>;
  }
  
  return user ? children : null;
};