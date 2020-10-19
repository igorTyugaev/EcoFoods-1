import React, { Component } from 'react';
import './style.scss';
import arrow from './arrowBack.svg'

export default class Header extends Component {
    render() {
        const {button, title} = this.props
        return (
            <div className="header">
               {button&& <button className="header__button"><img src={arrow} alt="arrow"/></button>}
                <h1 className="header__title">{title}</h1>
            </div>
        );
    }
}
