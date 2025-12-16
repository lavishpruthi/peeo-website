import React from 'react';
import { Link } from 'react-router-dom';  // Import Link

const Header = () => (
  <header>
    <Link to="/">  {/* Makes the logo clickable and redirects to Home */}
      <img src="/images/LOGO.png" alt="Peeo Logo" />
    </Link>
  </header>
);

export default Header;