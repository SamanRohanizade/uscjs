import React from 'react'
import styles from './sideDrawer.module.scss'

const SideDrawer = ({ width, isOpen }) => {
  let sideDrawerStyles = [styles.sidebar, (isOpen ? styles.open : '')]
  return (
    <aside className={sideDrawerStyles.join(" ")} style={{ width }}>
      
    </aside>
  )
}

export default SideDrawer;