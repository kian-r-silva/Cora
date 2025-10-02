// Alternative Contact Form Implementation
// Use this if you want a simpler HTML form approach

const ContactFormAlternative = () => {
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>Book Your Private Chef Experience</h3>
                    <p>
                        Ready to elevate your dining experience? Fill out the form or reach out 
                        directly to discuss your event needs, menu preferences, or any dietary requirements.
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
                    {/* Simple HTML form that works with any service */}
                    <form 
                        className={styles.contactForm} 
                        action="https://formspree.io/f/your-form-id"
                        method="POST"
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name<span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Your name"
                            />
                        </div>
                        
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email<span className={styles.required}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your email"
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone<span className={styles.required}>*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="Your phone number"
                                />
                            </div>
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="inquiryType">Inquiry Type<span className={styles.required}>*</span></label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                                required
                            >
                                <option value="">Select inquiry type</option>
                                <option value="Meal Planning & Prep">Meal Planning & Prep</option>
                                <option value="Private Events">Private Events</option>
                                <option value="Grocery Shopping">Grocery Shopping</option>
                                <option value="Kitchen Organization">Kitchen Organization</option>
                            </select>
                        </div>
                        
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="guestCount">Number of Guests (optional)</label>
                                <input
                                    type="number"
                                    id="guestCount"
                                    name="guestCount"
                                    placeholder="Number of guests"
                                    min="1"
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="eventType">Event Type (optional)</label>
                                <select
                                    id="eventType"
                                    name="eventType"
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
                                required
                                placeholder="Tell me about your event, dietary preferences, or any questions you have"
                            ></textarea>
                        </div>
                        
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
