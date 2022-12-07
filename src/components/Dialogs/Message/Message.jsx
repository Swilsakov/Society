import React from 'react'
import classes from './../dialogs.module.css'

const Message = (props) => {
  return (
    <div className={classes.dialogs}>
      {props.message}
    </div>
  )
}

export default Message