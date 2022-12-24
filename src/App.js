import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/Friends/Friends'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav state={props.state}/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route default path='/profile' 
            element={
              <Profile 
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch} />
            }
          />
          <Route path='/dialogs' 
            element={
              <Dialogs 
                dialogsPage={props.state.dialogsPage} 
                dispatch={props.dispatch}
              />
            } 
          />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends /> }/>
        </Routes>
      </div>
    </div>
  )
};

export default App