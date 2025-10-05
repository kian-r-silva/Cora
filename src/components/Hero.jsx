import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { FaInstagram, FaPinterest, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { fetchFromSanity } from '../lib/sanity';

const imageFiles = [
    'Cora BFast.jpeg',
    'Cora Dinner.jpeg',
    'Cora Food Opening image.jpeg',
    'Cora Salad.jpg',
    'Cora Table.jpg',
];

function ImageCarousel({ images }) {
    const [current, setCurrent] = useState(0);
    
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
    const [resume, setResume] = useState(null);
    
    useEffect(() => {
        // Fetch resume data from Sanity
        const fetchResume = async () => {
            try {
                const query = `*[_type == "resume" && isActive == true][0] {
                    title,
                    buttonText,
                    "resumeUrl": resumeFile.asset->url,
                    isActive
                }`;
                
                const data = await fetchFromSanity(query);
                setResume(data);
            } catch (err) {
                console.error('Error fetching resume:', err);
            }
        };
        
        fetchResume();
    }, []);

    const handleResumeDownload = () => {
        if (resume?.resumeUrl) {
            window.open(resume.resumeUrl, '_blank');
        }
    };

    return (
        <section className={styles.heroCarouselSection}>
            <div className={styles.heroOverlayFrame}>
                <h1 className={styles.heroOpeningTitle}>Cora Belle Colvin</h1>
                <h2 className={styles.heroOpeningSubtitle}>Private Chef</h2>
                <p className={styles.heroOpeningLocation}>Los Angeles, CA | New York, NY</p>
                
                {/* Social Media Links with React Icons */}
                <div className={styles.socialLinks}>
                    <a 
                        href="https://www.instagram.com/coraacolvin/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="Instagram"
                    >
                        <FaInstagram className={styles.socialIcon} />
                    </a>
                    <a 
                        href="https://www.pinterest.com/cora_colvin/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="Pinterest"
                    >
                        <FaPinterest className={styles.socialIcon} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/cora-colvin-233172267/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className={styles.socialIcon} />
                    </a>
                    {/* Resume Button */}
                    {resume && (
                        <button
                            onClick={handleResumeDownload}
                            className={`${styles.socialLink} ${styles.resumeButton}`}
                            aria-label={`Download ${resume.title}`}
                            title={`Download ${resume.title}`}
                        >
                            <FaFileDownload className={styles.socialIcon} />
                            <span className={styles.resumeText}>{resume.buttonText}</span>
                        </button>
                    )}
                </div>
            </div>
            <div className={styles.carouselFrame}>
                <ImageCarousel images={imageFiles} />
            </div>
        </section>
    );
};

export default Hero;