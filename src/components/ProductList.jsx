import React from 'react'

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy", price: 2.99 },
  { id: 2, name: "Cheese", category: "Dairy", price: 4.49 },
  { id: 3, name: "Apple", category: "Fruits", price: 1.29 },
  { id: 4, name: "Banana", category: "Fruits", price: 0.99 },
  { id: 5, name: "Bread", category: "Bakery", price: 3.49 },
  { id: 6, name: "Muffin", category: "Bakery", price: 2.19 },
  { id: 7, name: "Chicken", category: "Meat", price: 7.99 },
  { id: 8, name: "Beef", category: "Meat", price: 9.49 },
]

const ProductList = ({ products, addToCart }) => {
  if (products.length === 0) {
    return <p>No products available</p>
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span> - ${product.price.toFixed(2)}</span>
          <button
            data-testid={`product-${product.id}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList