import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
    {/* имя атрибута должно совпадать с типизацией (имя ключа Array) на уровне ниже */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
