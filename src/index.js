import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { configStore } from './Components/Redux/Store/Store';
// import { myStore } from './Components/reduxHome/store';
import { newStore } from './Components/NewRedux/NewStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={newStore()}>
    <App />
 </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
