import React, { Component } from 'react';
import Header from '../Header';
import CartList from '../CartList'

export default class CartPage extends Component {
    render() {
        return (
            <>
                <Header title="Card"></Header>
                <CartList></CartList>
            </>
        );
    }
}
