import React, { Component } from 'react';
import CartItem from '../CartItem'
import './style.scss';



export default class CartList extends Component {
    render() {
        return (
            <ul className="settings__list">
                <CartItem></CartItem>

            </ul>
        );
    }
}
