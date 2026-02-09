import React from 'react';
import './Home.css';
import ProductGrid from '../components/ProductGrid';
import apparelImg from './download1.jpeg';
import accessoriesImg from './download.jpeg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">The 2026 Collection</span>
          <h1>Define Your Legacy</h1>
          <button className="premium-button">Explore Selection</button>
        </div>
      </section>

      <section className="home-categories">
      <div className="category-card">
        {/* 2. Use the imported variable in curly braces */}
        <img src={apparelImg} alt="Apparel" />
        <div className="category-overlay">
          <h3>Timeless Apparel</h3>
          <p>Crafted for the modern silhouette</p>
        </div>
      </div>

      <div className="category-card">
        {/* 2. Use the imported variable in curly braces */}
        <img src={accessoriesImg} alt="Accessories" />
        <div className="category-overlay">
          <h3>Exquisite Details</h3>
          <p>Hand-selected accessories</p>
        </div>
      </div>
    </section>

      {/* This is where you would place your ProductGrid component */}
      <section className="home-products">
        <div className="section-header" style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="pdp-title">Our Masterpieces</h2>
        </div>
         <ProductGrid /> 
      </section>
    </div>
  );
};

export default Home;
