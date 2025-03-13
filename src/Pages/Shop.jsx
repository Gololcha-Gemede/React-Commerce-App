import React from 'react';
import { useStore } from '../context/StoreContext';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import './Shop.css';

export default function Shop() {
  const { products, loading } = useStore();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}