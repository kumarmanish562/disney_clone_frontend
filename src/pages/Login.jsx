import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isLogin) {
      // Signup validation
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    // Simulate login/signup success
    console.log('Form submitted with:', { email, password });
    navigate('/');
  };

  const isFormValid = () => {
    if (isLogin) {
      return email.trim() !== '' && password.trim() !== '';
    } else {
      return (
        email.trim() !== '' &&
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-end pb-12 bg-gradient-to-b from-[#001529] to-[#002e5b]">
      <div className="bg-[#05294d] p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {isLogin ? 'Login to Disney+ Hotstar' : 'Create an Account'}
        </h2>

        {error && (
          <div className="mb-4 text-red-400 text-center" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#0c3a66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a1ff] text-white placeholder-gray-300"
              placeholder="Enter your email"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0c3a66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a1ff] text-white placeholder-gray-300"
              placeholder="Enter your password"
              required
              aria-required="true"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-white">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0c3a66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a1ff] text-white placeholder-gray-300"
                placeholder="Confirm your password"
                required
                aria-required="true"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-3 rounded-md font-medium transition duration-300
              ${
                isFormValid()
                  ? 'bg-[#00a1ff] hover:bg-[#007acc] text-white cursor-pointer'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>

      {/* Toggle button below the form container */}
      <div className="mt-6">
        <button
          type="button"
          className="text-[#00a1ff] hover:underline focus:outline-none"
          onClick={() => {
            setError('');
            setIsLogin(!isLogin);
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
