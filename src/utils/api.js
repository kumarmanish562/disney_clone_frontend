import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movies/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};

export const fetchShows = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shows`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shows:', error);
        throw error;
    }
};

export const fetchShowDetails = async (showId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shows/${showId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching show details:', error);
        throw error;
    }
};