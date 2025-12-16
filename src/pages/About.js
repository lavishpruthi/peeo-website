import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-page">
    {/* Hero Header */}
    <section className="about-hero">
      <div className="about-hero-overlay">
        <h1>About Peeo</h1>
        <p>Crafting joy in every sip — alcohol-free, full of flavor.</p>
      </div>
    </section>

    {/* Brand Story */}
    <section className="story-section">
      <div className="story-container">
        <h2>Our Story</h2>
        <p className="story-text">
          Peeo was born from a simple idea: great moments shouldn't require alcohol to be memorable. 
          We wanted sophisticated, refreshing drinks that everyone could enjoy — whether you're celebrating, 
          relaxing, or just treating yourself.
        </p>
        <p className="story-text">
          Made with real fruits, natural ingredients, and a whole lot of passion, Peeo brings bold flavors 
          and beautiful presentation to the world of mocktails. No compromises. Just pure refreshment.
        </p>
      </div>
    </section>

    {/* Mission & Values */}
    <section className="values-section">
      <div className="values-container">
        <h2>Our Promise</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">🌿</span>
            <h3>100% Natural</h3>
            <p>No artificial colors, flavors, or preservatives. Just real ingredients you can trust.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🍹</span>
            <h3>Bold & Balanced</h3>
            <p>Every recipe is crafted for maximum flavor — refreshing, exciting, and never boring.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">♻️</span>
            <h3>Mindful & Sustainable</h3>
            <p>We care about the planet as much as your taste buds. Eco-friendly from ingredient to bottle.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Fun Stats / Highlights */}
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <h3>4+</h3>
          <p>Unique Flavors</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Natural Ingredients</p>
        </div>
        <div className="stat-item">
          <h3>Zero</h3>
          <p>Alcohol. Always.</p>
        </div>
        <div className="stat-item">
          <h3>∞</h3>
          <p>Moments Elevated</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="about-cta">
      <h2>Ready to Experience Peeo?</h2>
      <p>Explore our collection or get in touch — we'd love to hear from you.</p>
      <div className="about-buttons">
        <Link to="/products" className="cta-button">View Products</Link>
        <Link to="/contact" className="cta-button secondary">Contact Us</Link>
      </div>
    </section>
  </div>
);

export default About;