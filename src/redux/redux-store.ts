import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

// type RootState = typeof rootReducers;
// export type ReduxStateType = ReturnType<RootState>


export type ReduxStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers);
export default store;

//@ts-ignore
window.store = store;




