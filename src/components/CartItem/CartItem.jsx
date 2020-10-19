import React, { Component } from 'react';
import './style.scss';


export default class CartItem extends Component {
    render() {
        const {img,title,text, price} = this.props
        return (
            <li className="cart-item">
                <img src={img} alt="" className="cart-item__img" />
                <div className="cart-item__main">
                    <div className="cart-item__row">
                        <div className="cart-item__text">
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="cart-item__row">
                        <span>{price}</span>
                    </div>
                </div>
           </li>
        );
    }
}
