import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Navbar from "../components/navbar"
import "./layout.scss"
import bookImage from 'src/images/YDKJS.png'
import logo from 'src/images/icon.png'

const Layout = ({ children }) => {
  let navbarItems = [
    { text: 'درباره دوره', to: '/#about' },
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
      <div className="container main">{children}</div>
      <footer className="p-3 text-white text-center">
        برای اطلاعات بیشتر با کانال تلگرام usc_javascript@ در تماس باشید!
      </footer>
    </>
  )
}

export default Layout
