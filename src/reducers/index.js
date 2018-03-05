// reducers/index.js

import {
    SELECT_EXPRESSION,
    SELECT_ONSCREEN
} from '../actions';

export const display = (state = {
    expression: '',
    onScreen: 0

}, action) => {
    switch (action.type) {
        case SELECT_EXPRESSION:
            return {
                ...state,
                expression: action.expression
            }
        case SELECT_ONSCREEN:
            return {
                ...state,
                onScreen: action.onScreen
            }
        default: 
            return state;
    }
}
