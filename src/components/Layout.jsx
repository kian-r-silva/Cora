import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];
  
  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navbarLeft}>
          <Link href="/" className={styles.navbarLogo}>Cora Colvin</Link>
        </div>

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
            <Link
              key={link.name}
              href={link.href}
              className={styles.navbarLink}
              onClick={() => setMenuOpen(false)} // Close menu when link is clicked
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      
      <main className={styles.mainContent}>
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;