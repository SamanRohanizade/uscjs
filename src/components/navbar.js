import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ items, allowCollapse, logo }) => {
  let navClassNames = ['navbar-nav', 'pr-0', (allowCollapse ? '' : 'flex-row')];

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-light fixed-top justify-content-between">
      <ul className={navClassNames.join(' ')}>
        {items.map(i => (
          <li className="nav-item ml-3" key={i.text}>
            <Link className="nav-link" activeClassName="active" to={i.to}>{i.text}</Link>
          </li>
        ))}
      </ul>
      
      {logo ? <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" width="45"/>
      </a> : null}
    </nav>
  )
}

export default Navbar;