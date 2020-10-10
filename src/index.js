import React from 'react';
import {createStore , compose } from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import Reducer from './components/store/redux'


const componentEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = createStore(Reducer , componentEnhance())

ReactDOM.render( <Provider store={reducer}><App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
