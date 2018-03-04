// store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import * as reducers from './reducers';

let middleware = [logger];
const store = createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(...middleware)
);

export default store;
