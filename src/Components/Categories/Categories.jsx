import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/StoreContext'
import './Categories.css'

export default function Categories() {
  const { categories } = useStore();

  const getCategoryIcon = (category) => {
    const icons = {
      'electronics': '🖥️',
      'jewelery': '💍',
      "men's clothing": '👔',
      "women's clothing": '👗'
    };
    return icons[category] || '🛍️';
  };

  const formatCategoryUrl = (category) => {
    return category.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="categories-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link 
              key={category}
              to={`/shop?category=${encodeURIComponent(category)}`}
              className="category-card"
            >
              <div className="category-icon">{getCategoryIcon(category)}</div>
              <h3 className="category-name">{category}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}