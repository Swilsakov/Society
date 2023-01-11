import React from 'react'
import classes from './navbar.module.css'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  const activeStyle = ({ isActive }) => ({ color: isActive ? '#fff' : '#545e6f' })
  let sidebarElements = props.sidebar.map( el => 
    <NavLink 
      key={el.id}
      to={el.url} 
      style={activeStyle}>{el.title}</NavLink>)

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        { sidebarElements }
      </div>
    </nav>
  )
}

export default Nav