import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, changePostText, RootStateType } from './redux/redux';


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} changePostText={changePostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


