import React from 'react';

const Products = () => (
  <section>
    <h2>Our Mocktails</h2>
    <p>Explore our colorful and refreshing range of premium mocktails:</p>
    <div className="gallery">
      <div>
        <img src="/berry.jpg" alt="Cherry Lime Splash" />
        <div className="product-caption">Cherry Lime Splash</div>
      </div>
      <div>
        <img src="/strawberry.jpg" alt="Strawberry Breeze" />
        <div className="product-caption">Strawberry Breeze</div>
      </div>
      <div>
        <img src="/blue-lagoon.jpg" alt="Tropical Fusion" />
        <div className="product-caption">Tropical Fruit Fusion</div>
      </div>
      <div>
        <img src="/orange.jpg" alt="Citrus Boost" />
        <div className="product-caption">Citrus Immune Booster</div>
      </div>
    </div>
  </section>
);

export default Products;