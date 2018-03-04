// reducers/index.js

import {
    SELECT_EXPRESSION
} from '../actions';

export const display = (state = {
    expression: 0
}, action) => {
    switch (action.type) {
        case SELECT_EXPRESSION:
            return {
                ...state,
                expression: action.expression
            }
        default: 
            return state;
    }
}
