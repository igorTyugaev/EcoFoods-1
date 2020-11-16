import React, { Component } from 'react';
import MyProductItem from '../MyProductItem';
import './style.scss';
import img from './img/1.jpg';

const myProducts = [
    {
        img,
        title: 'Фруктовый салат',
        text: 'Осталось 3 шт.',
        price: '$20,32',
        id: 1,
    },
    {
        img,
        title: 'Фруктовый салат',
        text: 'Осталось 3 шт.',
        price: '$20,32',
        id: 2,
    },
];

export default class MyProductsList extends Component {
    render() {
        return (
            <ul className="settings__list">
                {myProducts.map((item) => (
                    <MyProductItem
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        price={item.price}
                    ></MyProductItem>
                ))}
            </ul>
        );
    }
}
