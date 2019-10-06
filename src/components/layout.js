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
      <nav className="navbar">{data.site.siteMetadata.title}</nav>
      <div className="container">{children}</div>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
