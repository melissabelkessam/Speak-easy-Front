import React from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-overlay">
                    <h1 className="hero-title">L'interdit devient possible</h1>
                    <p className="hero-subtitle">Découvrez une expérience unique et élégante.</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="feature-item">
                    <h2 className="feature-title">Home</h2>
                    <p className="feature-description">Explorez un univers mystérieux et raffiné.</p>
                    <a href="/" className="feature-button">HOME</a>
                </div>
                <div className="feature-item">
                    <h2 className="feature-title">About</h2>
                    <p className="feature-description">Plongez dans l'histoire fascinante de notre lieu.</p>
                    <a href="/about" className="feature-button">ABOUT</a>
                </div>
                <div className="feature-item">
                    <h2 className="feature-title">Reservation</h2>
                    <p className="feature-description">Réservez une expérience unique dès maintenant.</p>
                    <a href="/reservation" className="feature-button">RESERVATION</a>
                </div>
                <div className="feature-item">
                    <h2 className="feature-title">Events</h2>
                    <p className="feature-description">Vivez des soirées exclusives et inoubliables.</p>
                    <a href="/events" className="feature-button">EVENTS</a>
                </div>
            </div>

            {/* Nouvelle Section Image */}
            <div className="new-image-section">
                <div className="new-image-overlay">
                    <h2 className="new-image-title">Plongez dans une ambiance captivante</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
