import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './../dialogs.module.css'

const Dialog = (props) => {
  let path = `/dialogs/${props.id}`
  return (
    <div className={classes.item}>
      <div className={classes.dialogItem + ' ' + classes.active}>
        <img src={props.img} alt='' />
        <NavLink to={path}>
          <p>{props.name}</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Dialog