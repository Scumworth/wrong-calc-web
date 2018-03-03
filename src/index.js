// index.js

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['VT323', 'monospace', 'Iceland']
    }
});

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
