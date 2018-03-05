// components/Keypad.js

import React from 'react';
import './Keypad.css';

const Keypad = ( { pressKey, currExp }) => (
    <div className = "keypad">
        <button className = "calc-button clear-button" onClick = { e => pressKey(e, currExp) }>CLEAR</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>/</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>7</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>8</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>9</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>*</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>4</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>5</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>6</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>-</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>1</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>2</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>3</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>+</button>
        <button className = "calc-button zero-button" onClick = { e => pressKey(e, currExp) }>0</button>
        <button className = "calc-button" onClick = { e => pressKey(e, currExp) }>=</button>
    </div>
);

export default Keypad;
