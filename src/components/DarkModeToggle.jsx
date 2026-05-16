import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className={styles.toggle} onClick={handleToggle}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
