import React from "react"
import styles from './header.module.scss'

const Header = ({ title, children, headerBottomImage }) => (
  <header className={styles.header}>
    {children}
    <h1 className={styles.headerTitle + " mb-0"}>
      {title}
    </h1>
    <h2>
      دوره آموزشی عمیق جاوااسکریپت
      دانشگاه علم و فرهنگ
    </h2>
    {
      headerBottomImage
      ? <img className={styles.headerImage} src={headerBottomImage} alt={title}/>
      : null
    }
  </header>
)

export default Header
