import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';

type PostsItem = {
  id: number
  message: string
  likeCounts: string
}

type DialogsItem = {
  id: number
  name: string
}

type MessagesItem = {
  id: number
  message: string
}

type ContentItems = {
  posts: Array<PostsItem>//key должен совпадать с именем атрибута, которое добавляем в компоненте на уровень выше (то, что приходит в пропсы)
  dialogs: Array<DialogsItem>
  messages: Array<MessagesItem>
}

const App: React.FC<ContentItems> = (props) => {

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <main className='app-wrapper-content'>
            {/* <Route path='/profile' component={Profile} /> */}
            <Route path='/profile' render={() => <Profile posts={props.posts} />} />
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route path='/friends' render={() => <Friends />} />
          </main>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
