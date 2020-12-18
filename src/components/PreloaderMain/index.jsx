import React, { Component } from 'react';
import logo from './Preloader.svg';
import './style.css';

export default class Preloader extends Component {
    render() {
        return (
            <div className="preloader__wrapper">
                <div className="preloader">
                    <img src={logo} alt="" className="preloader__logo" />
                    <h2 className="preloader__text">EcoFoods</h2>
                </div>
            </div>
        );
    }
}
