import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

type RootReducersType = typeof rootReducers;

let store = createStore(rootReducers);

export type ReduxStateType = ReturnType<RootReducersType>


export default store;



