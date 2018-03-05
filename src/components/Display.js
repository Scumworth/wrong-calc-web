// components/Display.js

import React from 'react';
import './Display.css';

const Display = ( { onScreen }) => (
    <div id = "base">
        <div id = "screen">
            <h3 id = "screen-text">{ onScreen }</h3>
        </div>
    </div>
);

export default Display;
