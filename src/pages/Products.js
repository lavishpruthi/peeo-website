import React, { useState } from 'react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Product data with more details
  const products = [
    {
      id: 1,
      name: 'Cherry Lime Splash',
      price: '₹299',
      flavor: 'citrus',
      description: 'Tangy cherry meets zesty lime for a refreshing burst of summer in every sip.',
      image: './images/orange.jpg',
      category: 'Party Favorite'
    },
    {
      id: 2,
      name: 'Strawberry Breeze',
      price: '₹279',
      flavor: 'berry',
      description: 'Light and airy with fresh strawberry essence and a hint of mint.',
      image: './images/berry.jpg',
      category: 'Daily Refresh'
    },
    {
      id: 3,
      name: 'Tropical Fusion',
      price: '₹319',
      flavor: 'tropical',
      description: 'Pineapple, mango, and coconut dancing together in perfect harmony.',
      image: './images/blue-iced.jpg',
      category: 'Beach Vibes'
    },
    {
      id: 4,
      name: 'Citrus Immune Booster',
      price: '₹289',
      flavor: 'citrus',
      description: 'Orange, ginger, and turmeric for a healthy, zesty pick-me-up.',
      image: './images/orange.jpg',
      category: 'Wellness'
    },
    {
      id: 5,
      name: 'Berry Bliss',
      price: '₹299',
      flavor: 'berry',
      description: 'Mixed berries with a touch of basil for an unexpected twist.',
      image: './images/berry.jpg',
      category: 'Gourmet'
    },
    {
      id: 6,
      name: 'Summer Cup',
      price: '₹269',
      flavor: 'tropical',
      description: 'Classic summer flavors with cucumber and elderflower notes.',
      image: './images/blue-lagoon.jpg',
      category: 'Classic'
    }
  ];

  // Filter and search logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || product.flavor === filter;
    return matchesSearch && matchesFilter;
  });

  const addToCart = (product) => {
    // Simple cart simulation
    alert(`Added "${product.name}" to cart! 🍹\nPrice: ${product.price}`);
    // In real app, you'd dispatch to Redux/Context
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <h2>Our Mocktails</h2>
        <p className="products-subtitle">Discover our handcrafted collection of alcohol-free masterpieces</p>

        {/* Search & Filter */}
        <div className="products-controls">
          <input
            type="text"
            placeholder="Search by name or flavor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'citrus' ? 'active' : ''}`}
              onClick={() => setFilter('citrus')}
            >
              Citrus
            </button>
            <button
              className={`filter-btn ${filter === 'berry' ? 'active' : ''}`}
              onClick={() => setFilter('berry')}
            >
              Berry
            </button>
            <button
              className={`filter-btn ${filter === 'tropical' ? 'active' : ''}`}
              onClick={() => setFilter('tropical')}
            >
              Tropical
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="quick-view-btn" onClick={() => alert(`Quick View: ${product.name}\n${product.description}`)}>
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button 
                      className="add-to-cart-btn" 
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found. Try adjusting your search or filter! 🍹</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;