import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

// Import all section components
import Hero from '../components/Hero';
import About from '../components/About';
import Recipes from '../components/Recipes';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

// Import the Footer component
import Footer from '../components/Footer';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Add scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);
    
    // Add ESC key support to close the menu
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setMenuOpen(false);
            }
        };
        
        document.addEventListener('keydown', handleEsc);
        
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);
    
    return (
        <>
            <Head>
                <title>Cora Colvin | Private Chef</title>
                <meta name="description" content="Private chef services in Los Angeles and New York" />
            </Head>
            
            <main className={styles.mainHome}>
                {/* Navbar - add scrolled class conditionally */}
                <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
                    <div className={styles.navbarLeft}>Cora Colvin</div>
                    
                    <button 
                        className={`${styles.mobileMenuBtn} ${menuOpen ? styles.open : ''}`} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                    {/* Add overlay div for mobile */}
                    <div 
                        className={`${styles.menuOverlay} ${menuOpen ? styles.open : ''}`} 
                        onClick={() => setMenuOpen(false)}
                    ></div>
                    
                    <div className={`${styles.navbarRight} ${menuOpen ? styles.open : ''}`}>
                        {navLinks.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={styles.navbarLink}
                                onClick={() => setMenuOpen(false)} // Close menu when link is clicked
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Hero Section */}
                <Hero />
                
                {/* About Section */}
                <section id="about">
                    <About />
                </section>
                
                {/* Services Section */}
                <section id="services">
                    <Services />
                </section>
                
                {/* Recipes Section */}
                <section id="recipes">
                    <Recipes />
                </section>

                {/* Gallery Section */}
                <section id="gallery">
                    <Gallery />
                </section>
                
                {/* Contact Section */}
                <section id="contact">
                    <Contact />
                </section>
            </main>
            
            {/* Add the Footer component here */}
            <Footer />
        </>
    );
};

export default Home;