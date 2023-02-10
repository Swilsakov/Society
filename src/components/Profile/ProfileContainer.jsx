import React from 'react';
import Profile from './Profile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';


const ProfileAPIContainer = (props) => {
  const params = useParams();

  useEffect(() => {
    props.getUserProfile(params.userId)
  },)

  return (
    <Profile profile={props.profile} />
  )
};


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// let withAuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
// const ProfileContainer = connect(mapStateToProps, { getUserProfile })(withAuthRedirectComponent);

const ProfileContainer = withAuthRedirect(connect(mapStateToProps, { getUserProfile })(ProfileAPIContainer));


export default ProfileContainer;