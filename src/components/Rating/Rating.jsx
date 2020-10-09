import React, { Component } from 'react';
import './style.scss';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    componentDidMount() {
        const { value } = this.props;
        this.setState({
            value,
        });
    }
    render() {
        const { value } = this.state;
        return (
            <div className="rating">
                <span>{value}</span>
                <div className="rating__inner">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"
                            fill={value >= 1 ? '#FFC833' : '#EBF0FF'}
                        />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"
                            fill={value >= 2 ? '#FFC833' : '#EBF0FF'}
                        />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"
                            fill={value >= 3 ? '#FFC833' : '#EBF0FF'}
                        />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"
                            fill={value >= 3.9 ? '#FFC833' : '#EBF0FF'}
                        />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"
                            fill={value >= 4.5 ? '#FFC833' : '#EBF0FF'}
                        />
                    </svg>
                </div>
            </div>
        );
    }
}
