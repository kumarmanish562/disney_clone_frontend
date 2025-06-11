import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!email || !password) {
        throw new Error('Please fill in all required fields.');
      }

      if (!isLogin) {
        // Signup validation
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match.');
        }

        // Call register from AuthContext
        const success = await register(name, email, password);
        if (!success) {
          throw new Error('Registration failed. Please try again.');
        }
      } else {
        // Call login from AuthContext
        const success = await login(email, password);
        if (!success) {
          throw new Error('Invalid email or password. Please try again.');
        }
      }

      // Navigate on success (AuthContext will handle this)
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = () => {
    if (isLogin) {
      return email.trim() !== '' && password.trim() !== '';
    } else {
      return (
        name.trim() !== '' &&
        email.trim() !== '' &&
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-gradient-to-b from-[#0f0617] to-[#1a093b]">
      {/* Logo/branding */}
      <div className="mb-8">
        <Link to="/">
          <img 
            src="/logo.png" 
            alt="Disney+ Hotstar" 
            className="h-12 w-auto" 
          />
        </Link>
      </div>
      
      <div className="bg-gradient-to-b from-[#1a093b] to-[#0f0617] p-8 rounded-xl shadow-xl max-w-md w-full border border-[#00e5ff]/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-white text-center relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-1/4 after:h-[2px] after:bg-[#00e5ff]">
          {isLogin ? 'Login to Disney+' : 'Create an Account'}
        </h2>

        {error && (
          <div className="mb-6 text-red-400 text-center p-3 bg-red-900/20 rounded-md" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#b0b3c6]">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a093b]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5ff] text-white placeholder-gray-400 border border-[#00e5ff]/20"
                placeholder="Enter your full name"
                required
                aria-required="true"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#b0b3c6]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a093b]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5ff] text-white placeholder-gray-400 border border-[#00e5ff]/20"
              placeholder="Enter your email"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#b0b3c6]">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a093b]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5ff] text-white placeholder-gray-400 border border-[#00e5ff]/20"
              placeholder="Enter your password"
              required
              aria-required="true"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-[#b0b3c6]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a093b]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5ff] text-white placeholder-gray-400 border border-[#00e5ff]/20"
                placeholder="Confirm your password"
                required
                aria-required="true"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid() || isLoading}
            className={`w-full py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
              isFormValid() && !isLoading
                ? 'bg-[#00e5ff] hover:bg-[#00b8d9] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] text-[#0f0617] cursor-pointer'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>{isLogin ? 'Login' : 'Sign Up'}</>
            )}
          </button>
        </form>
      </div>

      {/* Toggle button with enhanced styling */}
      <div className="mt-6">
        <button
          type="button"
          className="text-[#00e5ff] hover:text-[#00b8d9] transition-colors duration-300 focus:outline-none"
          onClick={() => {
            setError('');
            setIsLogin(!isLogin);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }}
        >
          {isLogin ? 'New to Disney+? Sign up now' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;