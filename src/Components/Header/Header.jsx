import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import './Header.css'

export default function Header() {
  const { cart } = useStore();
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <nav className="nav-container container">
        <Link to="/" className="logo">Online Shop</Link>
        <div className="nav-links">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  )
}