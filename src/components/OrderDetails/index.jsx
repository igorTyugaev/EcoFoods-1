import React, { Component } from 'react';
import Header from '../Header';
import Products from '../Products';
import TableBlock from '../TableBlock';
import img from './1.jpg';
import BuyBlock from '../BuyBlock';

const products = [
    {
        id: 1,
        title: 'Melon fruit salad',
        location: 'Yekaterinburg, Mira, 19',
        price: '$20,32',
        img: img,
        quantity: 1,
    },
    {
        id: 2,
        title: 'Melon fruit salad',
        location: 'Yekaterinburg, Mira, 19',
        price: '$20,32',
        img: img,
        quantity: 1,
    },
];

export default class OrderDetails extends Component {
    handleBack = () => {
        window.history.back();
    };
    render() {
        return (
            <>
                <Header button={this.handleBack} title="Order Details"></Header>
                <Products products={products}></Products>
                <TableBlock
                    staticItems={['Date Shipping', 'Seller', 'Address']}
                    dynamicItems={[
                        '08 October, 2020',
                        'Dmitry Schapin',
                        'Yekaterinburg, Mira, 19',
                    ]}
                    title="Shipping Details"
                ></TableBlock>
            </>
        );
    }
}
