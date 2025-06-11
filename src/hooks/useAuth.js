// Import the useContext hook from React to access context values
import { useContext } from 'react';
// Import the AuthContext which contains authentication state and methods
import { AuthContext } from '../context/AuthContext';

/**
 * Custom hook that provides access to authentication context
 * This hook simplifies access to auth state and methods throughout the application
 * 
 * @returns {Object} Authentication context containing user data, login, logout functions, etc.
 */
const useAuth = () => {
    // Access the current value of AuthContext using useContext
    const context = useContext(AuthContext);

    // Safety check to ensure the hook is used within an AuthProvider component
    // This helps developers catch errors when the hook is used incorrectly
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    // Return all authentication values and methods from context
    return context;
};

export default useAuth;