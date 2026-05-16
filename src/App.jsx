import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './index.css'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])
  
  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleToggle() {
    setDarkMode(prev => !prev)
  }

  function addToCart(product) {
    setCart(prevCart => [...prevCart, product])
  }

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(product => product.category === selectedCategory)

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div>
        <h1>🛒 Shopping App</h1>
        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
