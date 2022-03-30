import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';
import store, { ReduxStateType } from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import UsersContainer from './components/Users/UsersContainer';
import { ActionTypes } from './redux/redux';
import ProfileContainer from './components/Profile/ProfileContainer';


type AppType = {
  appState: () => ReduxStateType
  dispatch: (action: ActionTypes) => void
  store: Store<ReduxStateType, ActionTypes>
}

const App = (props: AppType) => {
  const state = props.appState();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="site-wrapper">
          <div className='app-wrapper'>
            <Header />
            <NavBar />
            <main className='app-wrapper-content'>
              <Route path='/profile' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/friends' render={() => <Friends />} />
              <Route path='/users' render={() => <UsersContainer />} />
            </main>
          </div>
        </div >
      </Provider>
    </BrowserRouter>
  );
}

export default App;
