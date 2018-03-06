// reducers/index.js

import {
    SELECT_EXPRESSION,
    SELECT_ONSCREEN,
    SELECT_MODE
} from '../actions';

export const display = (state = {
    expression: '',
    onScreen: 0,
    lastNum: '',
    lastChar: '',
    wrongMode: false

}, action) => {
    switch (action.type) {
        case SELECT_EXPRESSION:
            return {
                ...state,
                expression: action.expression,
                lastNum: action.expression.length > 0 ? action.expression.split(/\D/g)[action.expression.split(/\D/g).length -1] : '',
                lastChar: action.expression.length > 0 ? action.expression.charAt(action.expression.length - 1) : ''
                
            }
        case SELECT_ONSCREEN:
            return {
                ...state,
                onScreen: action.onScreen
            }
        case SELECT_MODE:
            return {
                ...state,
                wrongMode: action.wrongMode
            }
        default: 
            return state;
    }
}


