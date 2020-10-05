import React, { Component } from 'react';
import Title from '../Title';
import './style.scss';

import milk from './img/milk.svg';

export default class Categories extends Component {
    render() {
        return (
            <section className="categories__wrapper">
                <Title h2="Category" aText="More Category"></Title>
                <ul className="categories">
                    <li className="categories__item categories__item_active">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                    <li className="categories__item ">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                    <li className="categories__item ">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                    <li className="categories__item">
                        <a href="/">
                            <img src={milk} alt="" className="" />
                        </a>
                        <span>Milk</span>
                    </li>
                </ul>
            </section>
        );
    }
}
