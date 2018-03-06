// reducers/index.js

import {
    SELECT_EXPRESSION,
    SELECT_ONSCREEN
} from '../actions';

export const display = (state = {
    expression: '',
    onScreen: 0,
    lastNum: '',
    lastChar: ''

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
        default: 
            return state;
    }
}
