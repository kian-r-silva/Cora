import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaInstagram, FaPinterest, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h2 className={styles.footerLogo}>Cora Colvin</h2>
            <p className={styles.footerTagline}>Private Chef</p>
          </div>
          
          <div className={styles.footerNav}>
            <h3 className={styles.footerHeading}>Menu</h3>
            <ul className={styles.footerNavList}>
              <li><a href="#about">About</a></li>
              <li><a href="#recipes">Recipes</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h3 className={styles.footerHeading}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:cora@coracolvin.com">cora@coracolvin.com</a>
              </li>
              <li>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+13106846217">(310) 684-6217</a>
              </li>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Los Angeles, CA | New York, NY</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerSocial}>
            <h3 className={styles.footerHeading}>Follow</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/coraacolvin/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.pinterest.com/cora_colvin/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className={styles.socialLink}
              >
                <FaPinterest />
              </a>
              <a 
                href="https://www.linkedin.com/in/cora-colvin-233172267/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Cora Colvin. All rights reserved.
          </p>
          <p className={styles.attribution}>
            Website designed by Kian Silva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;