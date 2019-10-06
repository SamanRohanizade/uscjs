import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import "./layout.scss"
import bookImage from 'src/images/YDKJS.png'
import logo from 'src/images/icon.png'

const Layout = ({ children }) => {
  let navbarItems = [
    { text: 'درباره دوره', to: '/' },
    { text: 'سرفصل‌های دوره', to: '/topics' },
  ]
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
        <Navbar
          allowCollapse={false}
          items={navbarItems}
          logo={logo}
        ></Navbar>
      </Header>
      <div className="container">{children}</div>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
