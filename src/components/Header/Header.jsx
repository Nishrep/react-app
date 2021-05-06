import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href='#'>
        <img src='https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-icon.svg' />
      </a>
    </header>
  )
}

export default Header
