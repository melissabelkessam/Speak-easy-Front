import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/events">Événements</Link>
                <Link to="/reservation">Réservation</Link>
                
            </div>
        </nav>
    );
};

export default Navbar;
