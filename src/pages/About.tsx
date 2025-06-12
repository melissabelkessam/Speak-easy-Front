import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
    return (
        <div className="about-container">
            {/* Hero section */}
            <section className="about-hero-section">
                <div className="about-hero-overlay">
                    <h1 className="about-title">5 Ruelle des Chats</h1>
                    <p className="about-subtitle">
                        Bar clandestin à Troyes.<br />
                        Un lieu caché. Une expérience unique.
                    </p>
                </div>
            </section>

            {/* Concept court */}
            <section className="about-concept-section">
                <h2>Le concept</h2>
                <p>
                    Inspiré des speakeasies des années 20, notre bar vous invite à plonger dans une atmosphère feutrée, élégante et mystérieuse.
                </p>
            </section>

            {/* Galerie visuelle */}
            <section className="about-gallery-section">
                <h3 className="gallery-title">L’ambiance en images</h3>
                <div className="gallery-images">
                    <img src={require("../assets/1.jpg")} alt="Ambiance 1" className="gallery-img" />
                    <img src={require("../assets/2.jpg")} alt="Ambiance 2" className="gallery-img" />
                    <img src={require("../assets/3.jpg")} alt="Ambiance 3" className="gallery-img" />
                </div>
            </section>

            {/* Localisation */}
            <section className="about-location-section">
                <div className="about-address">
                    <h4>Adresse</h4>
                    <p>5 Ruelle des Chats, 10000 Troyes</p>
                </div>
                <div className="about-map">
                    <iframe
                        title="Carte Bar Clandestin"
                        src="https://www.google.com/maps?q=5+Ruelle+des+Chats,+10000+Troyes&output=embed"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    );
};

export default About;
