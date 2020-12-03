import React, { Component } from 'react';
import './style.scss';

export default class ProgressBar extends Component {
    render() {
        const { points, step } = this.props;
        return (
            <div className="progress-bar__wrapper">
                <div className="progress-bar__line" />
                {points.map((item, index) => (
                    <div key={index} className="progress-bar__item">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse
                                cx="12"
                                cy="12"
                                rx="12"
                                ry="12"
                                fill={index < step ? '#1DDE7D' : '#9098B1'}
                            />
                            <path
                                d="M9 12.5L11.3333 15L16 10"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        );
    }
}
