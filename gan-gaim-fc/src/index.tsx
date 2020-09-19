import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react'
import PlayerList from './playerStore';
import playersJson from './playersJson';

const playerList = new PlayerList(playersJson);

ReactDOM.render(
  <React.StrictMode>
    <Provider playerList = {playerList}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
