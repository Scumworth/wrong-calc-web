// containers/KeypadContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keypad from './../components/Keypad';
import { selectOnScreen, selectExpression } from './../actions';
import math from 'mathjs';

class KeypadContainer extends Component {
    render() {
        return (
            <div>
                <Keypad pressKey = { this.props.pressKey } currExp = { this.props.expression }/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { display } = state;
    const { expression } = display;
    return { expression };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pressKey: (e, currExp) => {
            e.preventDefault();
            console.log(currExp);
            const target = e.target || e.srcElement;
            const keyID = target.textContent;
            if (keyID === "CLEAR"){
                
                dispatch(selectOnScreen('0'));
                dispatch(selectExpression(''));
            }
            else if (keyID === "="){
                dispatch(selectOnScreen(math.eval(currExp)));
                dispatch(selectExpression(''));

            }
            else if (keyID === "/" || keyID === "*" || keyID === "+" || keyID === "-"){
                dispatch(selectExpression(currExp + keyID));
            }
            else {
                const numArray = currExp.split(/\D/g);
                const currDisplay = numArray[numArray.length -1];
                dispatch(selectOnScreen(currDisplay + keyID));
                dispatch(selectExpression(currExp + keyID));
            }
            
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadContainer);

