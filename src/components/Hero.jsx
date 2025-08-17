import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const imageFiles = [
    'Cora BFast.jpeg',
    'Cora Dinner.jpeg',
    'Cora Food Opening image.jpeg',
    'Cora Salad.jpg',
    'Cora Table.jpg',
];

function ImageCarousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Responsive behavior detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const next = () => setCurrent((current + 1) % images.length);
    const prev = () => setCurrent((current - 1 + images.length) % images.length);
    
    // Auto-rotate images
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [current]);
    
    return (
        <div className={styles.carousel}>
            <button className={`${styles.carouselBtn} ${styles.left}`} onClick={prev} aria-label="Previous image">
                &lt;
            </button>
            <div className={styles.carouselImageContainer}>
                <img
                    src={`/Hero/` + images[current]}
                    alt={`Food presentation ${current + 1}`}
                    className={styles.carouselImg}
                    loading="lazy"
                />
            </div>
            <button className={`${styles.carouselBtn} ${styles.right}`} onClick={next} aria-label="Next image">
                &gt;
            </button>
            <div className={styles.carouselIndicators}>
                {images.map((img, idx) => (
                    <span
                        key={img}
                        className={`${styles.indicator} ${idx === current ? styles.active : ''}`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                    >
                        ●
                    </span>
                ))}
            </div>
        </div>
    );
}

const Hero = () => {
    return (
        <section className={styles.heroCarouselSection}>
            <div className={styles.heroOverlayFrame}>
                <h1 className={styles.heroOpeningTitle}>Cora Belle Colvin</h1>
                <h2 className={styles.heroOpeningSubtitle}>Private Chef</h2>
                <p className={styles.heroOpeningLocation}>Los Angeles, CA | New York, NY</p>
                <blockquote className={styles.heroQuote}>
                    "To be a good cook you have to have a love of the good, a love of hard work, and a love of creating."<br />
                    <span className={styles.heroQuoteAuthor}>– Julia Child</span>
                </blockquote>
                <a href="#contact" className={styles.ctaButton}>Book a Consultation</a>
            </div>
            <div className={styles.carouselFrame}>
                <ImageCarousel images={imageFiles} />
            </div>
        </section>
    );
};

export default Hero;