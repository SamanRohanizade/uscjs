import React from "react"
import styles from './header.module.scss'

const Header = ({ title, children }) => (
  <header className={styles.header}>
    {children}
    <h1 className={styles.headerTitle}>
      {title}
    </h1>
  </header>
)

export default Header
