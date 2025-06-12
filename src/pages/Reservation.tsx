import React, { useState } from "react";
import "../styles/Reservation.css";

const FAKE_HOURS = [
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
];

const Reservation: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        heure: "",
        nbPlace: 1,
    });
    const [hours, setHours] = useState<string[]>(FAKE_HOURS);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Pour préparer plusieurs restos si besoin, tu pourras le rendre dynamique plus tard
    const id_resto = 1;
    const id_plantable = 1;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Dynamique : quand la date change, on peut charger les créneaux depuis l’API
    const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setForm({ ...form, date, heure: "" });

        // Appel API pour la disponibilité, ici FAKE en dur
        // const resp = await fetch(`/api/restos/${id_resto}/disponibilite?date=${date}`);
        // const data = await resp.json();
        // setHours(data.hours);

        setHours(FAKE_HOURS); // à remplacer plus tard par la vraie réponse de l’API
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSubmitted(false);
        try {
            // Vérification minimum
            if (!form.heure) throw new Error("Veuillez choisir une heure disponible.");

            const response = await fetch(
                `/api/restos/${id_resto}/plantables/${id_plantable}/reservations`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                }
            );
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Erreur lors de la réservation.");
            }
            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                phone: "",
                date: "",
                heure: "",
                nbPlace: 1,
            });
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="reservation-container">
            <section className="reservation-hero-section">
                <div className="reservation-hero-overlay">
                    <h1 className="reservation-title">Réserver une table</h1>
                    <p className="reservation-subtitle">
                        Sélectionnez votre créneau et nombre de places.<br/>
                        L’expérience clandestine commence ici.
                    </p>
                </div>
            </section>
            <section className="reservation-form-section">
                <form className="reservation-form" onSubmit={handleSubmit} autoComplete="off">
                    <label>
                        Nom&nbsp;:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                        />
                    </label>
                    <label>
                        Email&nbsp;:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="exemple@mail.com"
                            required
                        />
                    </label>
                    <label>
                        Téléphone&nbsp;:
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="06 00 00 00 00"
                            required
                        />
                    </label>
                    <label>
                        Date&nbsp;:
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleDateChange}
                            required
                        />
                    </label>
                    <label>
                        Heure&nbsp;:
                        <select
                            name="heure"
                            value={form.heure}
                            onChange={handleChange}
                            disabled={!form.date}
                            required
                        >
                            <option value="">Choisir un horaire</option>
                            {hours.map(h =>
                                <option key={h} value={h}>{h}</option>
                            )}
                        </select>
                    </label>
                    <label>
                        Nombre de places&nbsp;:
                        <select
                            name="nbPlace"
                            value={form.nbPlace}
                            onChange={handleChange}
                            required
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button type="submit" className="reservation-btn">Réserver</button>
                    {error && <div className="reservation-error">{error}</div>}
                    {submitted && (
                        <div className="reservation-success">
                            ✔️ Réservation enregistrée.<br />
                            Vous recevrez un email de confirmation.
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Reservation;
