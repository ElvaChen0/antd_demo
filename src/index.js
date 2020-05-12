import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Link}from 'react-router-dom'
// import App from './example'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
      document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

{/*<React.StrictMode>*/}
{/*<App />*/}
{/*</React.StrictMode>,*/}