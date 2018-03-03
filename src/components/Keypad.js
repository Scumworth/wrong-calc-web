// components/Keypad.js

import React from 'react';
import './Keypad.css';

const Keypad = () => (
    <div className = "keypad">
        <button className = "calc-button clear-button">CLEAR</button>
        <button className = "calc-button">/</button>
        <button className = "calc-button">7</button>
        <button className = "calc-button">8</button>
        <button className = "calc-button">9</button>
        <button className = "calc-button">*</button>
        <button className = "calc-button">4</button>
        <button className = "calc-button">5</button>
        <button className = "calc-button">6</button>
        <button className = "calc-button">-</button>
        <button className = "calc-button">1</button>
        <button className = "calc-button">2</button>
        <button className = "calc-button">3</button>
        <button className = "calc-button">+</button>
        <button className = "calc-button zero-button">0</button>
        <button className = "calc-button">=</button>
    </div>
);

export default Keypad;
