// actions/index.js

export const SELECT_EXPRESSION = 'SELECT_EXPRESSION';
export const SELECT_ONSCREEN = 'SELECT_ONSCREEN';
export const SELECT_MODE = 'SELECT_MODE';

export const selectExpression = (expression) => ({
    type: SELECT_EXPRESSION,
    expression
});

export const selectOnScreen = (onScreen) => ({
    type: SELECT_ONSCREEN,
    onScreen
});

export const selectMode = (wrongMode) => ({
    type: SELECT_MODE,
    wrongMode
});
