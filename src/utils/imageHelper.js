/**
 * Image utility functions for generating and handling image URLs
 */

// Base URL for placeholder images
const PLACEHOLDER_BASE = 'https://via.placeholder.com';
const PLACEHOLDER_BG_COLOR = '0F172A'; // Dark blue background
const PLACEHOLDER_TEXT_COLOR = 'FFFFFF'; // White text

/**
 * Returns appropriate image URL for content posters
 * @param {string} path - Original image path or ID
 * @param {object} options - Configuration options
 * @returns {string} - URL for the image
 */
export const getImageUrl = (path, options = {}) => {
  if (!path) {
    return `${PLACEHOLDER_BASE}/300x450/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=No+Image`;
  }
  
  // Extract the image ID for use in placeholder
  const imageId = path.split('/').pop().split('-')[0];
  
  // Use custom dimensions if provided
  const width = options.width || 300;
  const height = options.height || 450;
  
  // Return placeholder images
  return `${PLACEHOLDER_BASE}/${width}x${height}/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=Disney+Content+${imageId}`;
};

/**
 * Returns appropriate image URL for banner images (wider dimensions)
 * @param {string} path - Original image path or ID
 * @param {object} options - Configuration options
 * @returns {string} - URL for the banner image
 */
export const getBannerUrl = (path, options = {}) => {
  if (!path) {
    return `${PLACEHOLDER_BASE}/1200x600/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=No+Banner`;
  }
  
  // Extract the image ID for use in placeholder
  const imageId = path.split('/').pop().split('-')[0];
  
  // Use custom dimensions if provided
  const width = options.width || 1200;
  const height = options.height || 600;
  
  // Return placeholder images
  return `${PLACEHOLDER_BASE}/${width}x${height}/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=Disney+Banner+${imageId}`;
};

/**
 * Returns appropriate image URL for profile/avatar images
 * @param {string} path - Original image path or ID
 * @returns {string} - URL for the profile image
 */
export const getProfileImageUrl = (path) => {
  if (!path) {
    return `${PLACEHOLDER_BASE}/150x150/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=Profile`;
  }
  
  // Extract the image ID for use in placeholder
  const imageId = path.split('/').pop().split('-')[0];
  
  // Return placeholder images
  return `${PLACEHOLDER_BASE}/150x150/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=Profile+${imageId}`;
};

/**
 * Returns appropriate image URL for a studio/brand logo
 * @param {string} studioName - Name of the studio/brand
 * @returns {string} - URL for the studio logo 
 */
export const getStudioLogoUrl = (studioName) => {
  if (!studioName) {
    return `${PLACEHOLDER_BASE}/200x100/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=Studio`;
  }
  
  // Format studio name for the placeholder
  const formattedName = studioName.replace(/\s+/g, '+');
  
  // Return placeholder images
  return `${PLACEHOLDER_BASE}/200x100/${PLACEHOLDER_BG_COLOR}/${PLACEHOLDER_TEXT_COLOR}?text=${formattedName}`;
};