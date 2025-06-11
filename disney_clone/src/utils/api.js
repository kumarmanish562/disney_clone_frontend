import axios from 'axios';

// Use environment variables for API URL configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request/response interceptors for global handling
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling, e.g., refresh token or redirect on 401
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      console.log('Unauthorized access, redirecting to login');
      // Could dispatch logout action or redirect here
    }
    return Promise.reject(error);
  }
);

export const fetchMovies = async (params = {}) => {
  try {
    const response = await apiClient.get('/movies', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await apiClient.get(`/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${movieId}:`, error);
    throw error;
  }
};

export const fetchShows = async (params = {}) => {
  try {
    const response = await apiClient.get('/shows', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

export const fetchShowDetails = async (showId) => {
  try {
    const response = await apiClient.get(`/shows/${showId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching show details for ID ${showId}:`, error);
    throw error;
  }
};

// Add search functionality
export const searchContent = async (query, type = 'all') => {
  try {
    const response = await apiClient.get('/search', { 
      params: { query, type }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching content:', error);
    throw error;
  }
};

// User authentication
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// User profile
export const fetchUserProfile = async () => {
  try {
    const response = await apiClient.get('/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Add watchlist functionality
export const fetchWatchlist = async () => {
  try {
    const response = await apiClient.get('/user/watchlist');
    return response.data;
  } catch (error) {
    console.error('Error fetching watchlist:', error);
    throw error;
  }
};

export const addToWatchlist = async (contentId, contentType) => {
  try {
    const response = await apiClient.post('/user/watchlist', { contentId, contentType });
    return response.data;
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    throw error;
  }
};