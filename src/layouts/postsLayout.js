import React, {useState} from 'react'
import Navbar from "src/components/navbar"
import SideDrawer from "src/components/sideDrawer"
import "./layout.scss"

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
      ></Navbar>
      <SideDrawer width="250px" isOpen></SideDrawer>
      <div className="main with-sidebar mt-5 pt-5 px-5">
        {children}
      </div>
    </>
  )
}

export default PostsLayout;