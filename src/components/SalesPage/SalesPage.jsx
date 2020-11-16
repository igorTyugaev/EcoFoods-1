import React, { Component } from 'react';
import Advertising from '../Advertising';
import Header from '../Header';
import SalesCategoryChart from '../SalesCategoryChart';
import SalesLocationChart from '../SalesLocationChart';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

const data = {
    statLocation: [
        {
            title: 'Russia',
            value: 10,
        },
        {
            title: 'Курган',
            value: 80,
        },
        {
            title: 'Екат',
            value: 10,
        },
        {
            title: 'Казахи',
            value: 200,
        },
    ],
    advertisings: [
        {
            img: img1,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 1,
        },
        {
            img: img2,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 2,
        },
        {
            img: img3,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 3,
        },
        {
            img: img1,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 4,
        },
        {
            img: img2,
            title: 'Молоко кайфовое',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto Velit, iusto Velit, iusto...`,
            price: '200руб',
            id: 5,
        },
    ],
};

export default class SalesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: false,
        };
    }
    render() {
        return (
            <>
                <Header title="Продажи"></Header>
                <Advertising
                    url="/product"
                    advertisings={data.advertisings}
                ></Advertising>
                <SalesCategoryChart></SalesCategoryChart>
                <SalesLocationChart
                    statLocation={data.statLocation}
                ></SalesLocationChart>
            </>
        );
    }
}
