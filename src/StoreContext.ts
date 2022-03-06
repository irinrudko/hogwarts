import React from 'react';
import { RootStateType, StoreType } from './redux/redux';
import { ReduxStateType } from './redux/redux-store';
import { Store } from 'redux';
import { ActionTypes } from './redux/redux';




export const StoreContext = React.createContext({} as Store<ReduxStateType, ActionTypes>)

