// containers/KeypadContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keypad from './../components/Keypad';

class KeypadContainer extends Component {
    render() {
        return (
            <div>
                <Keypad />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleKeyPress: (e, keyID) => {
            
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadContainer);

