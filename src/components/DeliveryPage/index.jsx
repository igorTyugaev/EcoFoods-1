import React, { Component } from 'react';
import Header from '../Header';
import ProgressBar from '../ProgressBar';
import { Link } from 'react-router-dom';
import './style.scss';

export default class DeliveryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delivery: '',
        };
    }
    handleBack = () => {
        window.history.back();
    };
    handleChange = (e) => {
        this.setState({
            delivery: e.target.value,
        });
    };
    render() {
        const points = ['Корзина', 'Доставка', 'Оплата'];
        const { delivery } = this.state;
        return (
            <>
                <Header button={this.handleBack} title="Доставка"></Header>
                <ProgressBar points={points} step={1}></ProgressBar>
                <main className="delivery">
                    <h2 className="h2">Выберите способ доставки</h2>
                    <select
                        onChange={(e) => this.handleChange(e)}
                        className="delivery__input"
                    >
                        <option value="">Не выбранно</option>
                        <option value="delivery">Доставка от продавца</option>
                        <option value="pickup">Cамовывоз</option>
                    </select>
                    {delivery && (
                        <>
                            <input
                                className="delivery__input"
                                type="date"
                            ></input>
                        </>
                    )}
                    {delivery === 'delivery' && (
                        <>
                            <h2 className="h2">Время доставки</h2>
                            <select className="delivery__input">
                                <option value="">С 7:00 до 8:00</option>
                                <option value="">С 8:00 до 9:00</option>
                                <option value="">С 9:00 до 10:00</option>
                                <option value="">С 10:00 до 11:00</option>
                                <option value="">С 11:00 до 12:00</option>
                                <option value="">С 12:00 до 13:00</option>
                                <option value="">С 13:00 до 14:00</option>
                            </select>
                            <h2 className="h2">Город</h2>
                            <input type="text" className="delivery__input" />
                            <h2 className="h2">Улица</h2>
                            <input type="text" className="delivery__input" />
                            <h2 className="h2">Дом</h2>
                            <input type="text" className="delivery__input" />
                            <h2 className="h2">Кв./Офис</h2>
                            <input type="text" className="delivery__input" />
                            <h2 className="h2">Доп. информация</h2>
                            <input type="text" className="delivery__input" />
                        </>
                    )}
                    {delivery === 'pickup' && (
                        <>
                            <h2 className="h2">Время самовывоза</h2>
                            <select className="delivery__input">
                                <option value="">С 7:00 до 8:00</option>
                                <option value="">С 8:00 до 9:00</option>
                                <option value="">С 9:00 до 10:00</option>
                                <option value="">С 10:00 до 11:00</option>
                                <option value="">С 11:00 до 12:00</option>
                                <option value="">С 12:00 до 13:00</option>
                                <option value="">С 13:00 до 14:00</option>
                            </select>
                            <h2 className="h2">Самовывоз из</h2>
                            <input type="text" className="delivery__input" />
                        </>
                    )}
                    {delivery && (
                        <Link to="/cart/payment">
                            <button className="delivery__button">
                                Перейти к оплате
                            </button>
                        </Link>
                    )}
                </main>
            </>
        );
    }
}
