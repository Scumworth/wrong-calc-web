// actions/index.js

export const SELECT_EXPRESSION = 'SELECT_EXPRESSION';

export const selectExpression = (expression) => ({
    type: SELECT_EXPRESSION,
    expression
});
