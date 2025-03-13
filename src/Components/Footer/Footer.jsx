import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">E-commerce</h3>
          <p className="footer-text">Your one-stop shop for quality products</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/shop" className="footer-link">Shop</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/shipping" className="footer-link">Shipping Info</Link></li>
            <li><Link to="/returns" className="footer-link">Returns</Link></li>
            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Newsletter</h4>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
