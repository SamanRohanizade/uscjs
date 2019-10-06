import React from "react"
import styles from './header.module.scss'

const Header = ({ title, children, headerBottomImage }) => (
  <header className={styles.header}>
    {children}
    <h1 className={styles.headerTitle}>
      {title}
    </h1>
    {
      headerBottomImage
      ? <img className={styles.headerImage} src={headerBottomImage} alt={title}/>
      : null
    }
  </header>
)

export default Header
