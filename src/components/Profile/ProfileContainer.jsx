import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';


const ProfileAPIContainer = (props) => {
  const params = useParams();
  if (!params.userId) {
    params.userId = 2;
    // console.log(params.userId);
  }

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
      .then(res => { props.setUserProfile(res.data) })
  },)

  return (
    <Profile profile={props.profile} />
  )
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIContainer);
export default ProfileContainer;