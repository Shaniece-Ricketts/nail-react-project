import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Nail Salon</span>
      <ul className="navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
