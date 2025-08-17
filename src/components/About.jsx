import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.titleContainer}>
                <h2 className={styles.sectionTitle}>About Me</h2>
            </div>

            {/* First Section - Text left, Image right */}
            <div className={styles.bioSection}>
                <div className={styles.bioContent}>
                    <p className={styles.bioParagraph}>
                        Food has always been a love language for me. I've long been an adventurous eater and a creative force in the kitchen—passions that naturally paved the way for my career in private dining. Originally from Los Angeles, I've called New York City home for the past five years after attending Sarah Lawrence College.
                    </p>
                    <p className={styles.bioParagraph}>
                        Outside the kitchen, I bring the same drive and adaptability to every role I take on. At Sarah Lawrence, I balanced a rigorous academic schedule with four years as captain of the women's soccer team, earning multiple conference honors, including Scholar-Athlete of the Year. That experience shaped my work ethic, leadership, and commitment to excellence.
                    </p>
                    <p className={styles.bioParagraph}>
                        Professionally, I've had the joy of working as a private chef for a family in NYC, where I manage everything from weekly meal prep and casual lunches to multi-course dinner parties and full-scale event planning. My role is a blend of creativity, precision, and hospitality—I'm not just cooking meals; I'm curating experiences. Whether it's crafting a seasonal menu or pulling off a last-minute garden party, I thrive in both the hustle and the heart of it all. Cooking has taught me the art of timing, the importance of detail, and the value of showing up consistently with care and intention.
                    </p>
                </div>
                <div className={styles.bioImage}>
                    <img 
                        src="/About/Cora Image.jpg" 
                        alt="Cora Colvin" 
                        className={styles.portraitImage}
                    />
                </div>
            </div>

            {/* Second Section - Image left, Text right */}
            <div className={`${styles.bioSection} ${styles.reversed}`}>
                <div className={styles.bioImage}>
                    <img 
                        src="/About/Cora Cake.jpeg" 
                        alt="Cora cutting a cake" 
                        className={styles.secondaryImage}
                    />
                </div>
                <div className={styles.bioContent}>
                    <p className={styles.bioParagraph}>
                        My passion for cooking has always stemmed from a desire to find the most effective and enjoyable way to fuel my body; food that not only tastes great but also supports my performance, recovery, and long-term health. As someone who leads an active lifestyle, I've learned firsthand how powerful nutrition can be in achieving both physical and mental goals. Cooking became more than a hobby; it became a personal tool for optimizing energy, strength, and overall well-being.
                    </p>
                    <p className={styles.bioParagraph}>
                        This mindset naturally carried over into my work with clients. I believe that food should support an individual's lifestyle, not work against it. That's why I prioritize creating meals and nutrition plans that are not only nourishing and well-balanced but also tailored to each person's goals; whether they're training for a marathon, managing stress, or just trying to feel better day to day. I always aim to bridge the gap between functionality and flavor, helping people discover that healthy eating can be both practical and deeply satisfying.
                    </p>
                    <p className={styles.bioParagraph}>
                        Ultimately, my approach is rooted in empowerment: teaching clients how to make food choices that align with their goals and showing them how enjoyable and sustainable healthy eating can truly be.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;