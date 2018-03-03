// containers/App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Display from './../components/Display';
import Slider from './../components/Slider';
import KeypadContainer from './KeypadContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Display 
                    expression = { this.props.expression }
                />
                <KeypadContainer />
                <Slider />
                <Footer />
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

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
