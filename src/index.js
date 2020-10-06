import React from 'react';
import {createStore , compose , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
