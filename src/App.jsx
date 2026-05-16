import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import Filter from './components/Filter'
import './index.css'

const categories = ["All", "Dairy", "Fruits", "Bakery", "Meat"]

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])
  
  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState("All")

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product])
    }
  }
 
  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)
 

  return (
    <div>
      <DarkModeToggle 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <h1>Grocery Shopping App</h1>
 
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
 
      {/* Product List */}
      <ProductList products={filteredProducts} addToCart={addToCart} />
 
      {/* Cart */}
      <h2>Shopping Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} is in your cart</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
