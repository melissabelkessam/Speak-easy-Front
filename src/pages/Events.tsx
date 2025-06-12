import React from "react";
import "../styles/Events.css";

const Events: React.FC = () => {
    return (
        <div className="events-container">
            {/* Hero section */}
            <section className="events-hero-section">
                <div className="events-hero-overlay">
                    <h1 className="events-title">Événements à venir</h1>
                    <p className="events-subtitle">
                        Préparez-vous à vivre des soirées exclusives,<br />
                        mystérieuses et inoubliables…
                    </p>
                </div>
            </section>

            {/* Message A venir */}
            <section className="events-content-section">
                <div className="events-message">
                    <h2>Prochainement</h2>
                    <p>
                        Il n’y a pas encore d’événements prévus, mais restez à l’écoute&nbsp;: de nouvelles expériences secrètes arrivent bientôt…
                    </p>
                    <div className="events-img-placeholder">
                        <img src={require("../assets/2.jpg")} alt="À venir" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
