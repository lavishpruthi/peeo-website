import React from 'react';
import ContactForm from '../components/ContactForm';  // ← Add this import

const Contact = () => (
  <section className="contact-section">
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        We'd love to hear from you! Whether it's feedback, collaboration ideas, or just saying hi — we're all ears. 🍹
      </p>

      <div className="contact-grid">
        {/* Your three existing cards here (Email, Social, Business) */}
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h3>Email Us</h3>
          <p>Drop us a message anytime</p>
          <a href="mailto:team.peeo@gmail.com" className="contact-btn">
            team.peeo@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📱</div>
          <h3>Follow Us</h3>
          <p>Join our community for updates & vibes</p>
          <div className="social-links">
            <a href="https://instagram.com/peeo.official" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram @peeo.official
            </a>
            <a href="https://facebook.com/peeo.official" target="_blank" rel="noopener noreferrer" className="social-link">
              Facebook @peeo.official
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💼</div>
          <h3>Business Inquiries</h3>
          <p>Retail partnerships, events, custom orders</p>
          <div className="business-text">
            We're excited to collaborate!<br />
            Reach out via email above.
          </div>
        </div>
      </div>

      {/* Contact Form Below Cards */}
      <ContactForm />
    </div>
  </section>
);

export default Contact;