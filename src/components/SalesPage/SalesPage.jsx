import React, { Component } from 'react';
import Advertising from '../Advertising';
import Header from '../Header';
import SalesCategoryChart from '../SalesCategoryChart';
import SalesLocationChart from '../SalesLocationChart';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

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
            img: img4,
            title: 'Как увеличить конверсию продаж?',
            description: ``,
            price: '',
            id: 1,
        },

        {
            img: img4,
            title: 'Как увеличить конверсию продаж?',
            description: ``,
            price: '',
            id: 1,
        },

        {
            img: img4,
            title: 'Как увеличить конверсию продаж?',
            description: ``,
            price: '',
            id: 1,
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
