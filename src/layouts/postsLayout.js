import React, {useState} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from "src/components/navbar"
import SideDrawer from "src/components/sideDrawer"
import BurgerMenuToggler from "src/components/burgerMenuToggler"
import "./layout.scss"

const PostsLayout = ({ children }) => {
  let [sideDrawerVisibility, setSideDrawerVisibility] = useState(true);
  let data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);
  let sideDrawerItems = data.allMarkdownRemark.edges.map(i => {
    let item = {};
    ({title: item.title, path: item.path} = i.node.frontmatter);
    return item;
  });

  let navbarItems = [
    { text: 'درباره دوره', to: '/' },
    { text: 'سرفصل‌های دوره', to: '/topics/basics', partial: true },
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
      <SideDrawer
        width="250px"
        isOpen={sideDrawerVisibility}
        items={sideDrawerItems}
      ></SideDrawer>
      <div className={sideDrawerClassNames.join(' ')}>
        {children}
      </div>
    </>
  )
}

export default PostsLayout;