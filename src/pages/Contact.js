import React from 'react';

const Contact = () => (
  <section>
    <h2>Get in Touch</h2>
    <p className="contact-intro">We'd love to hear from you! Feel free to reach out for inquiries, feedback, collaborations, or just to say hi.</p>
    <div className="contact-details">
      <div className="contact-item">
        <span className="contact-icon">✉️</span>
        <div>
          <strong>Email Us</strong><br />
          <a href="mailto:team.peeo@gmail.com" className="contact-link">team.peeo@gmail.com</a>
        </div>
      </div>
      <div className="contact-item">
        <span className="contact-icon">📱</span>
        <div>
          <strong>Follow Us</strong><br />
          <a href="https://instagram.com/peeo.official" target="_blank" rel="noopener noreferrer" className="contact-link">@peeo.official on Instagram</a><br />
          <a href="https://facebook.com/peeo.official" target="_blank" rel="noopener noreferrer" className="contact-link">@peeo.official on Facebook</a>
          {/* Add more social links as needed */}
        </div>
      </div>
      <div className="contact-item">
        <span className="contact-icon">💬</span>
        <div>
          <strong>Business Inquiries</strong><br />
          Retail partnerships, events, or custom orders — we're excited to collaborate!
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
