import React, {useState} from 'react'
import Navbar from "src/components/navbar"
import SideDrawer from "src/components/sideDrawer"
import BurgerMenuToggler from "src/components/burgerMenuToggler"
import "./layout.scss"

const PostsLayout = ({children}) => {
  let [sideDrawerVisibility, setSideDrawerVisibility] = useState(true);

  let navbarItems = [
    { text: 'درباره دوره', to: '/' },
    { text: 'سرفصل‌های دوره', to: '/topics/basics' },
  ];
  let sideDrawerClassNames = ['main', 'mt-5', 'pt-5', 'px-5', (sideDrawerVisibility ? 'with-sidebar' : '')];

  let toggler = (<BurgerMenuToggler
      active={sideDrawerVisibility}
      onToggle={() => setSideDrawerVisibility(!sideDrawerVisibility)}
    ></BurgerMenuToggler>)

  return (
    <>
      <Navbar
        allowCollapse={false}
        items={navbarItems}
        Toggler={toggler}
      ></Navbar>
      <SideDrawer width="250px" isOpen={sideDrawerVisibility}></SideDrawer>
      <div className={sideDrawerClassNames.join(' ')}>
        {children}
      </div>
    </>
  )
}

export default PostsLayout;