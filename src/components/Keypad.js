// components/Keypad.js

import React from 'react';
import './Keypad.css';

const Keypad = ( { pressKey, currExp, lastNum, lastChar, wrongMode }) => (
    <div className = "keypad">
        <button className = "calc-button clear-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>CLEAR</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>/</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>7</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>8</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>9</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>*</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>4</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>5</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>6</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>-</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>1</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>2</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>3</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>+</button>
        <button className = "calc-button zero-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>0</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar, wrongMode) }>=</button>
    </div>
);

export default Keypad;
