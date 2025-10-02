// Utility functions for making HTTP requests to Sanity's API
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

const SANITY_BASE_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

export async function fetchFromSanity(query) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `${SANITY_BASE_URL}?query=${encodedQuery}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    throw error;
  }
}

export function urlForImage(source) {
  if (!source || !source.asset || !source.asset._ref) {
    return {
      width: () => createImageBuilder('https://via.placeholder.com/400x300?text=No+Image'),
      height: () => createImageBuilder('https://via.placeholder.com/400x300?text=No+Image'),
      quality: () => createImageBuilder('https://via.placeholder.com/400x300?text=No+Image'),
      url: () => 'https://via.placeholder.com/400x300?text=No+Image'
    };
  }
  
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.split('-');
  const baseUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dimensions}.${format}`;
  
  return createImageBuilder(baseUrl);
}

function createImageBuilder(baseUrl, params = {}) {
  return {
    width: (w) => createImageBuilder(baseUrl, { ...params, w }),
    height: (h) => createImageBuilder(baseUrl, { ...params, h }),
    quality: (q) => createImageBuilder(baseUrl, { ...params, q }),
    url: () => {
      const queryString = new URLSearchParams(params).toString();
      return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    }
  };
}
