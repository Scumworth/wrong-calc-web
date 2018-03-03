// components/Display.js

import React from 'react';
import './Display.css';

const Display = ( { expression }) => (
    <div id = "base">
        <div id = "screen">
            <h3 id = "screen-text">{ expression }</h3>
        </div>
    </div>
);

export default Display;
