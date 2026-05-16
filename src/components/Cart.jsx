import React from 'react'
import styles from '../styles/Cart.module.css'

const Cart = ({ cart }) => {
  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <ul className={styles.list}>
          {cart.map((product, index) => (
            <li key={index} className={styles.item}>
              {product.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
