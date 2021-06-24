import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="site-wrapper">

      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <Main />

      </div>

    </div>
  );
}

export default App;
