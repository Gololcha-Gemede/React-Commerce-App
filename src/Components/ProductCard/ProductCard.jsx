import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.title}</h3>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
      <button 
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}