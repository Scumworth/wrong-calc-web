// components/Keypad.js

import React from 'react';
import './Keypad.css';

const Keypad = ( { pressKey }) => (
    <div className = "keypad">
        <button className = "calc-button clear-button" onClick = { e => pressKey(e, 'clear') }>CLEAR</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 'slash') }>/</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 7) }>7</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 8) }>8</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 9) }>9</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 'mult') }>*</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 4) }>4</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 5) }>5</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 6) }>6</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 'minus') }>-</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 1) }>1</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 2) }>2</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 3) }>3</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 'plus') }>+</button>
        <button className = "calc-button zero-button" onClick = { e => pressKey(e, 0) }>0</button>
        <button className = "calc-button" onClick = { e => pressKey(e, 'equals') }>=</button>
    </div>
);

export default Keypad;
