export const getImageUrl = (path) => {
  // Extract the image ID for use in placeholder
  const imageId = path.split('/').pop().split('-')[0];
  
  // Return placeholder images instead of the Hotstar URLs
  return `https://via.placeholder.com/300x450/0F172A/FFFFFF?text=Disney+Content+${imageId}`;
};

// Helper for banner images (wider dimensions)
export const getBannerUrl = (path) => {
  // Extract the image ID for use in placeholder
  const imageId = path.split('/').pop().split('-')[0];
  
  // Return placeholder images instead of the Hotstar URLs
  return `https://via.placeholder.com/1200x600/0F172A/FFFFFF?text=Disney+Banner+${imageId}`;
};