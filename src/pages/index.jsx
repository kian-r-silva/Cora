import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

// Import all section components
import Hero from '../components/Hero';
import About from '../components/About';
import Recipes from '../components/Recipes';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <Head>
                <title>Cora Colvin | Private Chef</title>
                <meta name="description" content="Private chef services in Los Angeles and New York" />
            </Head>
            
            <main className={styles.mainHome}>
                {/* Navbar */}
                <nav className={styles.navbar}>
                    <div className={styles.navbarLeft}>Cora Colvin</div>
                    
                    <button 
                        className={styles.mobileMenuBtn} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                    <div className={`${styles.navbarRight} ${menuOpen ? styles.open : ''}`}>
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className={styles.navbarLink}>
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
                
                {/* Recipes Section */}
                <section id="recipes">
                    <Recipes />
                </section>
                
                {/* Services Section */}
                <section id="services">
                    <Services />
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
        </>
    );
};

export default Home;