import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';
import { client } from '../sanity/lib/client';
import { urlForImage } from '../sanity/lib/image'; // Changed from urlFor to urlForImage

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Fetch gallery items from Sanity
        const fetchGalleryItems = async () => {
            try {
                const query = `*[_type == "galleryItem"] {
                    _id,
                    image,
                    altText
                }`;
                
                const data = await client.fetch(query);
                setGalleryItems(data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching gallery items:', err);
                setError('Failed to load gallery images');
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
                        onClick={() => window.location.reload()}
                        className={styles.retryButton}
                    >
                        Retry
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
                <p className={styles.noContent}>No gallery images available yet.</p>
            </div>
        );
    }
    
    // Render the gallery grid
    return (
        <div className={styles.galleryContainer} id="gallery">
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <div className={styles.galleryGrid}>
                {galleryItems.map((item) => (
                    <div key={item._id} className={styles.galleryItem}>
                        <img 
                            // Change urlFor to urlForImage here
                            src={urlForImage(item.image)
                                .width(800)
                                .height(800)
                                .quality(80)
                                .url()}
                            alt={item.altText}
                            className={styles.galleryImage}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;