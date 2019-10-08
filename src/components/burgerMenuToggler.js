import React from 'react'
import styles from './burgerMenuToggler.module.scss'

const BurgerMenuToggler = ({ active, onToggle }) => {
  let burgerClassNames = [styles.burger, (active ? styles.active : '')]
  return (
    <div className={styles.burgerContainer} onClick={onToggle}>
      <div className={burgerClassNames.join(" ")}></div>
    </div>
  );
}

export default BurgerMenuToggler;