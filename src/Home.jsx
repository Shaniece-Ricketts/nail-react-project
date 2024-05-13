import React from 'react';
import NailSalonImage from './images/nailsalonhome.jpeg';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Our Nail Salon!</h2>
      <img src={NailSalonImage} alt="Nail Salon" />
      <p>We provide high-quality nail services to make you look and feel beautiful.</p>
    </div>
  );
}

export default Home;

