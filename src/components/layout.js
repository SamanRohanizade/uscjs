import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import bookImage from 'src/images/YDKJS.png'
import logo from 'src/images/icon.png'

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
      <Header title="JavaScript" headerBottomImage={bookImage}>
        <nav className="navbar navbar-expand-sm bg-transparent navbar-light fixed-top justify-content-between">
          <ul className="navbar-nav pr-0">
            <li className="nav-item">
              <a className="nav-link" href="#">صفحه اصلی</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">درباره دوره</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">سرفصل‌های دوره</a>
            </li>
          </ul>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="45"/>
          </a>
        </nav>
      </Header>
      <div className="container">{children}</div>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
