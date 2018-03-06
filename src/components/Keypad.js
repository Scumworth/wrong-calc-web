// components/Keypad.js

import React from 'react';
import './Keypad.css';

const Keypad = ( { pressKey, currExp, lastNum, lastChar }) => (
    <div className = "keypad">
        <button className = "calc-button clear-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>CLEAR</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>/</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>7</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>8</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>9</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>*</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>4</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>5</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>6</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>-</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>1</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>2</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>3</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>+</button>
        <button className = "calc-button zero-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>0</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp, lastNum, lastChar) }>=</button>
    </div>
);

export default Keypad;
