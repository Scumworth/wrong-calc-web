// components/Slider.js

import React from 'react';
import './Slider.css';

const Slider = () => (
    <div id = "slider-container">
        <h3 className = "switch-label">RIGHT</h3>
        <label className = "switch">
            <input type = "checkbox"/>
            <span className = "slider"></span>
        </label>
        <h3 className = "switch-label">WRONG</h3>
    </div>
);

export default Slider;
