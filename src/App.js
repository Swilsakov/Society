import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Friends from './components/Friends/Friends'
import Header from './components/Header/Header'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavContainer from './components/Navbar/NavbarContainer'


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route default path='/profile'
            element={
              <Profile />}/>
          <Route path='/dialogs'
            element={
              <DialogsContainer />}/>
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
        </Routes>
      </div>
    </div>
  )
};

export default App