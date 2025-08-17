import React, { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Fetch gallery items from Sanity
        const fetchGalleryItems = async () => {
            try {
                console.log('Fetching gallery items from Sanity...');
                const query = `*[_type == "galleryItem"] {
                    _id,
                    image,
                    altText
                }`;
                
                console.log('Sanity client:', client);
                const data = await client.fetch(query);
                console.log('Gallery data fetched:', data);
                setGalleryItems(data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching gallery items:', err);
                console.error('Error details:', JSON.stringify(err, null, 2));
                setError('Failed to load gallery images: ' + (err.message || 'Unknown error'));
                setIsLoading(false);
            }
        };
        
        fetchGalleryItems();
    }, []);
    
    // Handle the loading state
    if (isLoading) {
        return (
            <div className={styles.galleryContainer}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <div className={styles.loadingContainer}>
                    <p>Loading gallery...</p>
                </div>
            </div>
        );
    }
    
    // Handle errors
    if (error) {
        return (
            <div className={styles.galleryContainer}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <div className={styles.errorContainer}>
                    <p>{error}</p>
                    <button 
                        className={styles.retryButton}
                        onClick={() => {
                            setError(null);
                            setIsLoading(true);
                            // Re-fetch data
                            client.fetch(`*[_type == "galleryItem"] {
                                _id,
                                image,
                                altText
                            }`)
                            .then(data => {
                                console.log('Retry fetched data:', data);
                                setGalleryItems(data);
                                setIsLoading(false);
                            })
                            .catch(err => {
                                console.error('Retry error:', err);
                                setError('Failed to reload gallery images: ' + err.message);
                                setIsLoading(false);
                            });
                        }}
                    >
                        Retry Loading
                    </button>
                </div>
            </div>
        );
    }
    
    // No gallery items found
    if (galleryItems.length === 0) {
        return (
            <div className={styles.galleryContainer}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <p className={styles.noContent}>No gallery images available yet. Please add some in the Sanity Studio.</p>
            </div>
        );
    }
    
    // Render the gallery grid
    return (
        <div className={styles.galleryContainer}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <div className={styles.galleryGrid}>
                {galleryItems.map((item) => (
                    <div key={item._id} className={styles.galleryItem}>
                        <img 
                            src={item.image ? urlFor(item.image)
                                .width(800)
                                .height(800)
                                .quality(80)
                                .url() : '/placeholder-image.jpg'}
                            alt={item.altText || 'Gallery image'}
                            className={styles.galleryImage}
                            loading="lazy"
                            onError={(e) => {
                                console.error('Image failed to load:', item);
                                e.target.src = '/placeholder-image.jpg'; // Fallback image
                                e.target.alt = 'Image unavailable';
                            }}
                        />
                        <div className={styles.galleryCaption}>
                            <p>{item.altText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;