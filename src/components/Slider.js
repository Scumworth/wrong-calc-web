// components/Slider.js

import React from 'react';
import Checkbox from 'rc-checkbox';
import './Slider.css';

const Slider = ( { wrongMode, flipMode }) => (
    <div id = "slider-container">
        <h3 className = "switch-label">RIGHT</h3>
        <label className = "switch">
            <Checkbox 
                id = "box" 
                checked = { wrongMode }
                onChange = { () => flipMode(wrongMode) }
            />
            <span className = "slider"></span>
        </label>
        <h3 className = "switch-label">WRONG</h3>
    </div>
);

export default Slider;
