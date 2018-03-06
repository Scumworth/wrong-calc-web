// containers/App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Display from './../components/Display';
import Slider from './../components/Slider';
import KeypadContainer from './KeypadContainer';
import { selectMode } from './../actions';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Display 
                    onScreen = { this.props.onScreen }
                />
                <KeypadContainer />
                <Slider wrongMode = { this.props.wrongMode } flipMode = { this.props.flipMode } />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { display } = state;
    const { onScreen, wrongMode } = display;
    return { onScreen, wrongMode };
};

const mapDispatchToProps = (dispatch) => {
    return {
        flipMode: (currMode) => {
            dispatch(selectMode(!currMode))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
