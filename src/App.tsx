import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <main className='app-wrapper-content'>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/friends' component={Friends} />
          </main>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
