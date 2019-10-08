import React from 'react'
import Navbar from "../components/navbar"
import logo from 'src/images/icon.png'

const PostsLayout = ({children}) => {
  let navbarItems = [
    { text: 'درباره دوره', to: '/' },
    { text: 'سرفصل‌های دوره', to: '/topics/basics' },
  ]

  return (
    <>
      <Navbar
        allowCollapse={false}
        items={navbarItems}
        logo={logo}
      ></Navbar>
      <div className="container mt-5 pt-5">
        {children}
      </div>
    </>
  )
}

export default PostsLayout;