import React from 'react'

function Filter({ selectedCategory, setSelectedCategory }) {
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
      </select>
    </div>
  )
}

export default Filter