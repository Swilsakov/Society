import React from 'react';
import Profile from './Profile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect,
)(ProfileAPIContainer)
// 1 - the older
// let withAuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
// const ProfileContainer = connect(mapStateToProps, { getUserProfile })(withAuthRedirectComponent);

// 2 - new
// const ProfileContainer = withAuthRedirect(connect(mapStateToProps, { getUserProfile })(ProfileAPIContainer));
// export default ProfileContainer;