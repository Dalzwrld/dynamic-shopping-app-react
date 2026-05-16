import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>Price: {product.price}</p>
      <p className={styles.status}>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button
        data-testid={'product-' + product.id}
        className={styles.button}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
