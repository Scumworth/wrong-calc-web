// actions/index.js

export const SELECT_EXPRESSION = 'SELECT_EXPRESSION';
export const SELECT_ONSCREEN = 'SELECT_ONSCREEN';

export const selectExpression = (expression) => ({
    type: SELECT_EXPRESSION,
    expression
});

export const selectOnScreen = (onScreen) => ({
    type: SELECT_ONSCREEN,
    onScreen
});
