import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, RootStateType } from './redux/redux';


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


