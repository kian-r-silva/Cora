import React from 'react';
import styles from '../styles/Services.module.css';
import Image from 'next/image';

const servicesData = [
    {
        title: "Meal Planning & Prep",
        description: "Customized weekly meal planning based on your dietary needs and preferences. Includes preparation of ready-to-eat meals or partially prepared dishes that can be quickly finished for a fresh dining experience.",
        image: "/Services/Meal Prep.jpeg"
    },
    {
        title: "Private Events",
        description: "Full-service catering for intimate dinner parties, special celebrations, or corporate events. From menu design to execution, I handle every aspect of the culinary experience for your guests.",
        image: "/Services/Catering.jpeg"
    },
    {
        title: "Grocery Shopping",
        description: "Sourcing the finest seasonal ingredients from local markets, specialty shops, and trusted vendors. I select premium produce and products to ensure every meal meets the highest standards of quality and flavor.",
        image: "/Services/Groceries.jpeg"
    },
    {
        title: "Kitchen Organization",
        description: "Professional organization of your kitchen space and refrigerator to maximize efficiency and freshness. Includes pantry setup, storage solutions, and systems to maintain order and reduce food waste.",
        image: "/Services/Fridge.jpeg"
    }
];

const Services = () => {
    return (
        <div className={styles.servicesContainer}>
            <h2 className={styles.sectionTitle}>Services</h2>
            
            <blockquote className={styles.quoteBlock}>
                "You don't have to cook fancy or complicated masterpieces — just food from fresh ingredients."
                <span className={styles.quoteAuthor}>— Julia Child</span>
            </blockquote>
            
            <div className={styles.servicesGrid}>
                {servicesData.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <div className={styles.serviceImageContainer}>
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className={styles.serviceImage}
                            />
                        </div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;