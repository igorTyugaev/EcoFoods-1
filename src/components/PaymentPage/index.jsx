import React, { Component } from 'react';
import Header from '../Header';
import ProgressBar from '../ProgressBar';
import bank from './img/bank.svg';
import card from './img/card.svg';
import { Link } from 'react-router-dom';
import './style.scss';

export default class PaymentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 2,
            payment: false,
        };
    }
    handleBack = () => {
        window.history.back();
    };
    handleChange = (e) => {
        this.setState({ payment: e.target.id, progress: 3 });
    };
    render() {
        const points = ['Корзина', 'Доставка', 'Оплата'];
        const { progress, payment } = this.state;
        return (
            <>
                <Header button={this.handleBack} title="Оплата"></Header>
                <ProgressBar points={points} step={progress}></ProgressBar>
                <main className="payment">
                    <h2 className="h2">Выберите способ оплаты</h2>
                    <div className="payment__list">
                        <div
                            className={
                                payment === 'card'
                                    ? 'payment__item payment__item_active'
                                    : 'payment__item'
                            }
                        >
                            <input
                                onChange={(e) => this.handleChange(e)}
                                id="card"
                                type="radio"
                                name="payment"
                                value="1"
                            />
                            <label htmlFor="card">
                                <img
                                    className="payment__item-icon"
                                    src={bank}
                                    alt=""
                                />
                                Оплата наличными или картой
                            </label>
                        </div>
                        <div
                            className={
                                payment === 'transfer'
                                    ? 'payment__item payment__item_active'
                                    : 'payment__item'
                            }
                        >
                            <input
                                onChange={(e) => this.handleChange(e)}
                                id="transfer"
                                type="radio"
                                name="payment"
                                value="2"
                            />
                            <label htmlFor="transfer">
                                <img
                                    className="payment__item-icon"
                                    src={card}
                                    alt=""
                                />
                                Электронный платеж
                            </label>
                        </div>
                    </div>
                    {progress === 3 && (
                        <Link to="/">
                            <button className="payment__button">
                                Перейти к оплате
                            </button>
                        </Link>
                    )}
                </main>
            </>
        );
    }
}
