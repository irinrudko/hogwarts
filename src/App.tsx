import React from 'react'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import Friends from './components/Friends/Friends'
import { BrowserRouter, Route } from 'react-router-dom'
import store, { ActionTypes, ReduxStateType } from './redux/redux-store'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { Login } from './components/Login/Login'
import { routes } from './pages/router'

type AppType = {
    dispatch: (action: ActionTypes) => void
    store: Store<ReduxStateType, ActionTypes>
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="site-wrapper">
                    <div className="app-wrapper">
                        <HeaderContainer />
                        <NavBar />
                        <main className="app-wrapper-content">
                            <Route path={routes.profile} render={() => <ProfileContainer />} />
                            <Route path={routes.dialogs} render={() => <DialogsContainer />} />
                            <Route path={routes.friends} render={() => <Friends />} />
                            <Route path={routes.users} render={() => <UsersContainer />} />
                            <Route path={routes.login} render={() => <Login />} />
                        </main>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App
