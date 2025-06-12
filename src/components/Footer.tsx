import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Adresse Section */}
                <div className="footer-section">
                    <h3>Adresse</h3>
                    <p>
                        Troyes<br />
                        5 Rle des Chats, 10000 Troyes
                    </p>
                </div>
                {/* Contact Section */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>
                        03 10 94 03 03<br />
                        odijon@hotmail.com
                    </p>
                </div>
                {/* Horaires Section */}
                <div className="footer-section">
                    <h3>Horaires</h3>
                    <p>
                        Du lundi au vendredi<br />
                        de 22h à 03h
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                {/* Navigation Links */}
                <div className="footer-column">
                    <h4>Navigation</h4>
                    <ul>
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Notre Menu</li>
                        <li>Réservation</li>
                        <li>Evénements</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* Social Media Links */}
                <div className="footer-column">
                    <h4>Suivez-nous</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/p/Pain-d%C3%A9pices-100057337545032/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/paindepicesboutiqueoff" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://wa.me/33745373611" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="social-icon" />
                        </a>
                    </div>
                </div>
                {/* Legal Info */}
                <div className="footer-column">
                    <h4>Informations Légales</h4>
                    <ul>
                        <li>Mentions légales</li>
                        <li>Politique de confidentialité</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
