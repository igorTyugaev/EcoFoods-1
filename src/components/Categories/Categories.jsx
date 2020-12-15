import React, {Component} from 'react';
import Title from '../Title';
import './style.scss';

import milk from './img/milk.svg';

export default class Categories extends Component {
    render() {
        return (
            <section className="categories__wrapper">
                <Title h2="Категории" aText=""></Title>
                <select
                    className="categories__list"
                    onChange={(ev) => this.setState({category: ev.target.value})}>
                    <option>Рекомендации</option>
                    <option>Мясо</option>
                    <option>Рыба</option>
                    <option>Курица</option>
                    <option>Яйца</option>
                    <option>Овощи</option>
                    <option>Фрукты</option>
                    <option>Кисломолочная продукция</option>
                    <option>Молочная продукция</option>
                    <option>Ягоды</option>
                    <option>Замороженные продукты</option>
                    <option>Сыры</option>
                    <option>Грибы</option>
                    <option>Ягоды</option>
                    <option>Орехи</option>
                    <option>Безалкогольные напитки</option>
                    <option>Масло</option>
                    <option>Крупы</option>

                </select>
            </section>
        );
    }
}
