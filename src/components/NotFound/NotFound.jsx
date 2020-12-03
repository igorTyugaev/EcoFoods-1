import React, { Component } from 'react';
import './style.scss';
import img from './NotFound.svg';

export default class NotFound extends Component {
    render() {
        const { button, title, desc, buttonText } = this.props;
        return (
            <div className="not-found">
                <img src={img} alt="" />
                <h2 className="h2">{title}</h2>
                <span className="not-found__desc">{desc}</span>
                <br />
                {button && (
                    <button onClick={button} className="not-found__button">
                        {buttonText}
                    </button>
                )}
            </div>
        );
    }
}
