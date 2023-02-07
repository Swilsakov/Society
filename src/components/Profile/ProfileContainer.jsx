import React from 'react';
import Profile from './Profile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';


const ProfileAPIContainer = (props) => {
  const params = useParams();
  if (!params.userId) {
    params.userId = 2;
    // console.log(params.userId);
  }

  useEffect(() => {
    props.getUserProfile(params.userId)
  },)

  return (
    <Profile profile={props.profile} />
  )
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const ProfileContainer = connect(mapStateToProps, { getUserProfile })(ProfileAPIContainer);
export default ProfileContainer;