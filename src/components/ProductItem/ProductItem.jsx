import React, { Component } from 'react';
import './style.scss';

export default class ProductItem extends Component {
    render() {
        const { img, title, location, price, quantity } = this.props;
        return (
            <li className="product-item">
                <img src={img} alt="" className="product-item__img" />
                <div className="product-item__main">
                    <div className="product-item__row">
                        <div className="product-item__text">
                            <h3>{title}</h3>
                            <p>{location}</p>
                        </div>
                        <div className="product-item__quantity">
                            <span>{quantity}</span>
                        </div>
                    </div>
                    <div className="product-item__row">
                        <span>{price}</span>
                    </div>
                </div>
            </li>
        );
    }
}
