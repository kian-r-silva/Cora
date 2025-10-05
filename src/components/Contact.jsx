import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        guestCount: '',
        eventType: '',
        message: '',
    });
    
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: '',
    });
    
    const [formErrors, setFormErrors] = useState({});
    
    const validateForm = () => {
        const errors = {};
        
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.inquiryType) errors.inquiryType = 'Please select an inquiry type';
        if (!formData.message.trim()) errors.message = 'Please include a message';
        
        return errors;
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: '',
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Set loading state
        setFormStatus({
            submitted: false,
            error: false,
            message: 'Sending message...',
        });

        try {
            // Option 1: Formspree (recommended for static sites)
            // Replace 'your-form-id' with your actual Formspree form ID
            const response = await fetch('https://formspree.io/f/mnnbwwkl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    inquiryType: formData.inquiryType,
                    guestCount: formData.guestCount,
                    eventType: formData.eventType,
                    message: formData.message,
                    _replyto: formData.email, // Formspree will use this for replies
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Success state
            setFormStatus({
                submitted: true,
                error: false,
                message: 'Thank you for your message! I will get back to you soon.',
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                guestCount: '',
                eventType: '',
                message: '',
            });

        } catch (error) {
            // Fallback to mailto if service fails
            console.log('Form service failed, falling back to mailto:', error);
            
            const subject = `New ${formData.inquiryType} inquiry from ${formData.name}`;
            const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}
Guest Count: ${formData.guestCount || 'Not provided'}
Event Type: ${formData.eventType || 'Not provided'}

Message:
${formData.message}
            `.trim();
            
            const mailtoUrl = `mailto:cora@coracolvin.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;
            
            // Show fallback message
            setFormStatus({
                submitted: true,
                error: false,
                message: 'Your email client should open with the message pre-filled. Please send it to complete your inquiry.',
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                guestCount: '',
                eventType: '',
                message: '',
            });
        }
    };
    
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>Book Your Private Chef Experience</h3>
                    <p>
                        Fill out the form or reach out directly to discuss your event needs, menu preferences, or any dietary requirements.
                    </p>
                    
                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>Email:</span>
                            <a href="mailto:cora@coracolvin.com">cora@coracolvin.com</a>
                        </div>
                        
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>Phone:</span>
                            <a href="tel:+13106846217">(310) 684-6217</a>
                        </div>
                        
                        <div className={styles.contactItem}>
                            <span className={styles.contactLabel}>Areas Served:</span>
                            <p>Los Angeles and New York City</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.contactFormContainer}>
                    {formStatus.message && (
                        <div className={`${styles.formMessage} ${formStatus.error ? styles.errorMessage : ''} ${formStatus.submitted ? styles.successMessage : ''}`}>
                            {formStatus.message}
                        </div>
                    )}
                    
                    {!formStatus.submitted ? (
                        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name<span className={styles.required}>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={formErrors.name ? styles.inputError : ''}
                                    placeholder="Your name"
                                />
                                {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
                            </div>
                            
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email<span className={styles.required}>*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={formErrors.email ? styles.inputError : ''}
                                        placeholder="Your email"
                                    />
                                    {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone<span className={styles.required}>*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        className={formErrors.phone ? styles.inputError : ''}
                                    />
                                    {formErrors.phone && <span className={styles.errorText}>{formErrors.phone}</span>}
                                </div>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="inquiryType">Inquiry Type<span className={styles.required}>*</span></label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className={formErrors.inquiryType ? styles.inputError : ''}
                                >
                                    <option value="">Select inquiry type</option>
                                    <option value="Meal Planning & Prep">Meal Planning & Prep</option>
                                    <option value="Private Events">Private Events</option>
                                    <option value="Grocery Shopping">Grocery Shopping</option>
                                    <option value="Kitchen Organization">Kitchen Organization</option>
                                </select>
                                {formErrors.inquiryType && <span className={styles.errorText}>{formErrors.inquiryType}</span>}
                            </div>
                            
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="guestCount">Number of Guests (optional)</label>
                                    <input
                                        type="number"
                                        id="guestCount"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        placeholder="Number of guests"
                                        min="1"
                                    />
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label htmlFor="eventType">Event Type (optional)</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select event type</option>
                                        <option value="Dinner Party">Dinner Party</option>
                                        <option value="Corporate Event">Corporate Event</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Holiday Celebration">Holiday Celebration</option>
                                        <option value="Cooking Class">Cooking Class</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message<span className={styles.required}>*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={formErrors.message ? styles.inputError : ''}
                                    placeholder="Tell me about your event, dietary preferences, or any questions you have"
                                ></textarea>
                                {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
                            </div>
                            
                            <button type="submit" className={styles.submitButton}>
                                Send Message
                            </button>
                        </form>
                    ) : (
                        <div className={styles.thankYouContainer}>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. I'll be in touch soon.</p>
                            <button 
                                className={styles.sendAnotherButton}
                                onClick={() => setFormStatus({submitted: false, error: false, message: ''})}
                            >
                                Send Another Message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;