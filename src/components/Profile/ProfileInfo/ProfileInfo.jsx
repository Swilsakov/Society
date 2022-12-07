import React from 'react'
import classes from './profileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={classes}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6aPDlgPXNUo9IcfaFCOI2mlO_xKEf7PTYg&usqp=CAU' alt='img'/>
      </div>
      <div>
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo