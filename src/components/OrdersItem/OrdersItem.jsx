import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                <Link to={`/orders/item/${id}`}>
                    <div className="orders-item__header">
                        <div className="orders-item__row">
                            <h3 className="orders-item__id">{id.slice(0, 23)}</h3>
                            <span className="orders-item__date">{date}</span>
                        </div>
                    </div>
                    <div className="orders-item__main">
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">
                               Продавец
                            </span>
                            <span className="orders-item__value">
                                {orderAt}
                            </span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">
                                Статус заказа
                            </span>
                            <span className="orders-item__value">{status}</span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">
                                Способ доставки
                            </span>
                            <span className="orders-item__value">
                                {deliveryDate}
                            </span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">Кол-во</span>
                            <span className="orders-item__value">{items}</span>
                        </div>
                        <div className="orders-item__row">
                            <span className="orders-item__subtitle">Итого</span>
                            <span className="orders-item__value orders-item__value_green">
                                ₽{price}
                            </span>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}
