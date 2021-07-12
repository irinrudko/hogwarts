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
  let postsData = [
    { id: 1, message: "Hi, how're you?", likeCounts: "15" },
    { id: 2, message: "Hey, it's my first post", likeCounts: "20" },
    { id: 3, message: "Hey, it's my second post here", likeCounts: "2" },
    { id: 4, message: "This is a mapped post", likeCounts: "1000" },
  ]

  let dialogsData = [
    { id: 1, name: "Nastya", },
    { id: 2, name: "Tanya", },
    { id: 3, name: "Anna", },
    { id: 4, name: "Mike", },
    { id: 5, name: "LenaT", },
  ]

  let messagesData = [
    { id: 1, message: "hey", },
    { id: 2, message: "how're you?", },
    { id: 3, message: "Check some pics of Lena", },
  ]

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <main className='app-wrapper-content'>
            {/* <Route path='/profile' component={Profile} /> */}

            <Route path='/profile' render={() => <Profile posts={postsData} />} />
            <Route path='/dialogs' render={() => <Dialogs dialogs={dialogsData} messages={messagesData} />} />
            <Route path='/friends' render={() => <Friends />} />
          </main>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
