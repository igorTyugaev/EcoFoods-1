import React, { Component } from 'react';
import Header from '../Header';

export default class OrderDetails extends Component {
    handleBack = () => {
        window.history.back();
    };
    render() {
        return (
            <>
                <Header button={this.handleBack} title="Order Details"></Header>
            </>
        );
    }
}
