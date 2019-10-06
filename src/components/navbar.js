import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ items, allowCollapse, logo }) => {
  let navClassNames = ['navbar-nav', 'pr-0', (allowCollapse ? '' : 'flex-row')];

  return (
    <nav className="navbar navbar-expand-sm bg-transparent navbar-light justify-content-between">
      <ul className={navClassNames.join(' ')}>
        {items.map(i => (
          <li className="nav-item ml-3">
            <Link className="nav-link" to={i.to}>{i.text}</Link>
          </li>
        ))}
      </ul>
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" width="45"/>
      </a>
    </nav>
  )
}

export default Navbar;