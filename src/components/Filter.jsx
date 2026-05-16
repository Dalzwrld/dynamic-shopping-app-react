import React from 'react'

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <label className='dropdown'>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetables">Vegetables</option>
      </select>
    </div>
  )
}

export default Filter