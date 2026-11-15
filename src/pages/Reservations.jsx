
import { useState } from "react";

function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.time < "08:00" || formData.time > "20:00") {
    alert("Please select a time between 8:00 AM and 8:00 PM.");
    return;
  }
    setSubmitted(true);
  }

  return (
    <main className="reservation-page">
      <section className="reservation-heading">
        <p className="hero-label">YOUR TABLE AWAITS</p>
        <h1>Make a Reservation</h1>
        <p>We look forward to welcoming you to Maison.</p>
      </section>

      <section className="reservation-content">
        {submitted ? (
          <div className="success-message">
            <h2>Thank you, {formData.name}!</h2>
            <p>
              Your reservation request has been received.
              We look forward to seeing you.
            </p>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />

            <label>Reservation Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              required
            />

            
            <label>Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
            <option value="">Select a time</option>
            {Array.from({ length: 25 }, (_, i) => {
            const hour = 8 + Math.floor(i / 2);
            const minutes = i % 2 === 0 ? "00" : "30";
            const time = `${String(hour).padStart(2, "0")}:${minutes}`;

            return (
            <option key={time} value={time}>
            {new Date(`2000-01-01T${time}`).toLocaleTimeString(
            "en-US",
            { hour: "numeric", minute: "2-digit" }
            )}
            </option>
          );
        })}
      </select>


            <label>Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>

            <button type="submit" className="reservation-button">
              Request a Table
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default Reservations;
