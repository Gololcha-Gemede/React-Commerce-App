import React from 'react'
import { useStore } from '../../context/StoreContext'
import ProductCard from '../ProductCard/ProductCard'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  const { products, loading } = useStore();

  const featuredProducts = products.slice(0, 4);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="featured-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}