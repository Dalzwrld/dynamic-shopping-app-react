import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/ProductList.module.css'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ products, addToCart }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Available Products</h2>

      {sampleProducts.length === 0 ? (
        <p className={styles.empty}>No products match that filter.</p>
      ) : (
        <div className={styles.grid}>
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
