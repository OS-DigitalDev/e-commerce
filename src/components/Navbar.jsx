
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll-driven glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          ORION<span>STORE</span>
        </Link>
      </div>

      <div className="navbar-center">
        <SearchBar />
      </div>

      <div className="navbar-right">
        <Link to="/Product" className="nav-link">Shop</Link>
        <Link to="/Login" className="nav-link">My Collections</Link>
        <div className="nav-cart">
          <Link to="/cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
