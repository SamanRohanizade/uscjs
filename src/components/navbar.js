import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ items, allowCollapse, logo, Toggler }) => {
  let navClassNames = ['navbar-nav', 'pr-0', (allowCollapse ? '' : 'flex-row')];

  return (
    <nav
      className="navbar navbar-expand-sm bg-primary navbar-light fixed-top justify-content-between"
      style={{ minHeight: '3.5rem' }}  
    >
      <div className="d-flex">
        {Toggler ? <div className="toggler mt-1 ml-4">
          {Toggler}
        </div> : null}
        <ul className={navClassNames.join(' ')}>
          {items.map(i => (
            <li className="nav-item ml-2" key={i.text}>
              <Link className="nav-link" activeClassName="active" to={i.to}>{i.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      {logo ? <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" width="45"/>
      </a> : null}
    </nav>
  )
}

export default Navbar;