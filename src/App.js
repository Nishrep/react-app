import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/news' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/music' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/settings' render={() => <Profile state={props.state.profilePage} />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
