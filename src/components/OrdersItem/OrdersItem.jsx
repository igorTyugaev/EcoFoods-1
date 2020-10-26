import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class OrdersItem extends Component {
    render() {
        const {
            id,
            date,
            orderAt,
            status,
            deliveryDate,
            location,
            items,
            price,
        } = this.props;
        return (
            <li className="orders-item">
                <Link to="/orders/item">
                    <div className="orders-item__header">
                        <div className="orders-item__row">
                            <h3 className="orders-item__id">{id}</h3>
                            <span className="orders-item__date">{date}</span>
                        </div>
                        <div className="orders-item__row_start">
                            <span className="">Order at </span>
                            <a href="/" className="">
                                {orderAt}
                            </a>
                        </div>
                    </div>
                    <div className="orders-item__main">
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">
                                Order Status
                            </span>
                            <span className="orders-item__value">{status}</span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">
                                Delivery date
                            </span>
                            <span className="orders-item__value">
                                {deliveryDate}
                            </span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">
                                Location
                            </span>
                            <span className="orders-item__value">
                                {location}
                            </span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">Items</span>
                            <span className="orders-item__value">{items}</span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">Price</span>
                            <span className="orders-item__value orders-item__value_green">
                                {price}
                            </span>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}
