import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(prev => !prev)}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}


export default DarkModeToggle
