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
                <Keypad 
                    pressKey = { this.props.pressKey } 
                    currExp = { this.props.expression }
                    lastNum = { this.props.lastNum }
                    lastChar = { this.props.lastChar }
                    wrongMode = { this.props.wrongMode } 
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { display } = state;
    const { expression, lastNum, lastChar, wrongMode } = display;
    return { expression, lastNum, lastChar, wrongMode };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pressKey: (e, currExp, lastNum, lastChar, wrongMode) => {
            e.preventDefault();
            const target = e.target || e.srcElement;
            const keyID = target.textContent;
            if (keyID === "CLEAR"){
                
                dispatch(selectOnScreen('0'));
                dispatch(selectExpression(''));
            }
            else if (keyID === '=' && isNaN(lastChar) === false && currExp.length > 0){
                if(wrongMode){
                   const wrongAnswer = Math.floor(Math.random() * 1000) 
                    dispatch(selectOnScreen(wrongAnswer));
                    dispatch(selectExpression(wrongAnswer));
                }
                else {
                    dispatch(selectOnScreen(math.eval(currExp)));
                    dispatch(selectExpression(math.eval(currExp)));
                }

            }
            else if (isNaN(lastChar) === false && (keyID === '/' || keyID === '*' || keyID === '+' || keyID === '-')){
                dispatch(selectExpression(currExp + keyID));
            }
            else if (isNaN(keyID) === false) {
                dispatch(selectOnScreen(lastNum + keyID));
                dispatch(selectExpression(currExp + keyID));
            }
            
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadContainer);

