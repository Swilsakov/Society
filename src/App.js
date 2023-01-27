import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Friends from './components/Friends/Friends'
import Header from './components/Header/Header'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/dialogs' element={<DialogsContainer />} />
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