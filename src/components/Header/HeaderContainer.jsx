import React from 'react';
import Header from './Header';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer'

const HeaderContainer = (props) => {
  const setAuthUserDataFunc = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(res => {
        if (res.data.resultCode === 0) {
          let { id, login, email } = res.data.data;
          props.setAuthUserData(id, login, email)
          console.log(setAuthUserData);
        }
      })
  }

  useEffect(() => {
    setAuthUserDataFunc()
  })

  return <Header {...props} />
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);