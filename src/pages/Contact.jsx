
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <p className="hero-label">WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Get in Touch</h1>
        <p>Questions, feedback or just saying hello?</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <p className="hero-label">COME SAY HELLO</p>
          <h2>Find your way to Maison.</h2>

          <div className="contact-detail">
            <h3>Our Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="contact-detail">
            <h3>Opening Hours</h3>
            <p>Every day: 8:00 AM – 8:00 PM</p>
          </div>

          <div className="contact-detail">
            <h3>Email</h3>
            <p>hello@maisoncafe.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h2>Thank you, {formData.name}!</h2>
              <p>Your message has been received.</p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <label>Your Name</label>
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

              <label>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              />

              <button type="submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
