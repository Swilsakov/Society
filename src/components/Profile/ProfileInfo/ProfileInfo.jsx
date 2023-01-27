import React from 'react'
import classes from './profileInfo.module.css'
import Preloader from '../../middleware/Preloader/Preloader'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6aPDlgPXNUo9IcfaFCOI2mlO_xKEf7PTYg&usqp=CAU' alt='img'/>
      </div>
      <div>
        <img src={props.profile.photos.large} alt='profile-img' />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  )
}

export default ProfileInfo