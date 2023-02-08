import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Friends from './components/Friends/Friends'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
};

export default App;