import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import { useStore } from '../context/StoreContext'
import './Home.css'

export default function Home() {
  const { loading } = useStore();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home-container">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}