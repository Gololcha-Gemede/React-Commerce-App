import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-gradient"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Discover Amazing Products</h1>
        <p className="hero-description">Shop the latest trends with unbeatable prices and quality you can trust.</p>
        <div className="hero-buttons">
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          
        </div>
      </div>
    </div>
  )
}