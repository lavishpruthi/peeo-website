import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome to Peeo</h1>
        <p>Premium alcohol-free mocktails crafted with natural ingredients and vibrant flavors. Refreshment without the buzz.</p>
        <Link to="/products" className="cta-button">Explore Our Drinks</Link>
      </div>
    </section>

    {/* Why Peeo Section */}
    <section className="why-section">
      <div className="why-container">
        <h2>Why Choose Peeo?</h2>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon">🍹</span>
            <h3>Natural & Fresh</h3>
            <p>Made with real fruits, herbs, and zero artificial additives for pure, guilt-free sips.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">🎉</span>
            <h3>Party-Ready</h3>
            <p>Perfect for celebrations, brunches, or chill evenings — sophisticated taste, zero alcohol.</p>
          </div>
          <div className="why-card">
            <span className="why-icon">🌱</span>
            <h3>Sustainable Vibes</h3>
            <p>Eco-friendly packaging and ingredients sourced responsibly. Sip with a purpose.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Products Teaser */}
    <section className="featured-section">
      <div className="featured-container">
        <h2>Featured Flavors</h2>
        <p className="featured-intro">A taste of what makes Peeo special — discover more on our Products page.</p>
        <div className="featured-gallery">
          <Link to="/products" className="product-teaser">
            <img src="https://images.pexels.com/photos/5946969/pexels-photo-5946969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cherry Lime Splash" />
            <div className="teaser-overlay">
              <h3>Cherry Lime Splash</h3>
              <p>Tangy & Sweet</p>
            </div>
          </Link>
          <Link to="/products" className="product-teaser">
            <img src="https://images.pexels.com/photos/5946985/pexels-photo-5946985.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Strawberry Breeze" />
            <div className="teaser-overlay">
              <h3>Strawberry Breeze</h3>
              <p>Fresh & Fruity</p>
            </div>
          </Link>
          <Link to="/products" className="product-teaser">
            <img src="https://images.pexels.com/photos/12838832/pexels-photo-12838832.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tropical Fusion" />
            <div className="teaser-overlay">
              <h3>Tropical Fusion</h3>
              <p>Exotic Escape</p>
            </div>
          </Link>
        </div>
        <Link to="/products" className="cta-button full-width">View All Products</Link>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="cta-banner">
      <h2>Ready to Refresh?</h2>
      <p>Join the Peeo vibe and elevate your next moment.</p>
      <Link to="/contact" className="cta-button">Get in Touch</Link>
    </section>
  </div>
);

export default Home;