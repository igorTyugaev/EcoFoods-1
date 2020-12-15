import React, { Component } from 'react';
import Header from '../Header';
import OrdersList from '../OrdersList'

export default class Orders extends Component {
    render() {
        return (
            <>
                <Header title="Заказы"></Header>
                <OrdersList></OrdersList>
            </>
        );
    }
}
