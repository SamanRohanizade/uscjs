import React from 'react'
import {Link} from 'gatsby'
import styles from './sideDrawer.module.scss'

const SideDrawer = ({ width, isOpen, items }) => {
  let sideDrawerStyles = [styles.sidebar, (isOpen ? styles.open : '')]
  return (
    <aside className={sideDrawerStyles.join(" ")} style={{ width }}>
      <ul className={styles.sidebarList}>
        {items.map(i => (
          <li key={i.title} className="mb-4 pl-1">
            <Link to={i.path} activeClassName="text-primary">
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideDrawer;