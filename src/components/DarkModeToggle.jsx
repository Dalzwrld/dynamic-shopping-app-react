import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ toDarkMode, setToDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  function handleToggle() {
    setToDarkMode(prev => !prev)
  }

  return (
    <button className={styles.toggle} onClick={handleToggle}>
      {toDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
