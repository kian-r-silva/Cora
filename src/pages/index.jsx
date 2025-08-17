import React from 'react';

const heroImageUrl = '/Cora Food Opening image.jpeg';

const Home = () => (
    <main>
        {/* Hero Section */}
        <section className="hero-frame-section">
            <div className="hero-frame">
                <img src={heroImageUrl} alt="Cora Colvin cooking" className="hero-framed-img" />
                <div className="hero-overlay-frame">
                    <h1 className="hero-opening-title">Cora Belle Colvin</h1>
                    <h2 className="hero-opening-subtitle">Private Chef</h2>
                    <p className="hero-opening-location">Los Angeles, CA | New York, NY</p>
                </div>
            </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content">
            <div className="hero-section">
                <h1 className="hero-title">
                    Cora Belle Colvin
                </h1>
                <h2 className="hero-subtitle">
                    Private Chef &nbsp;|&nbsp; Los Angeles, CA &nbsp;|&nbsp; New York, NY
                </h2>
                <blockquote className="hero-quote">
                    “To be a good cook you have to have a love of the good, a love of hard work, and a love of creating.”<br />
                    <span className="hero-quote-author">– Julia Child</span>
                </blockquote>
                <div>
                    <a 
                        href="#contact"
                        className="cta-button"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        </section>
    </main>
);

export default Home;