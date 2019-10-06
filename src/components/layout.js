import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header title="JavaScript">
        <nav className="navbar navbar-expand-sm bg-transparent navbar-light fixed-top">
          <a className="navbar-brand" href="#">
            {data.site.siteMetadata.title}
          </a>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </Header>
      <div className="container">{children}</div>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
