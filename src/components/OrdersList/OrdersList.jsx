import React, { Component } from 'react';
import OrdersItem from '../OrdersItem'
import './style.scss';

const orders = [
    {
        id: 'LQNSU346JK',
        date: '08 October, 2020',
        orderAt: '@farmer_galaxy',    
        status: 'Shipping',
        deliveryDate: '12 oct. 2020',
        location: 'Yekaterinburg, Mira, 19',
        items:'2 Items purchased',
        price:'$299,43'
    },
    {
        id: 'LQNSU345JK',
        date: '08 October, 2020',
        orderAt: '@farmer_galaxy',    
        status: 'Shipping',
        deliveryDate: '12 oct. 2020',
        location: 'Yekaterinburg, Mira, 19',
        items:'2 Items purchased',
        price:'$299,43'
    },
    {
        id: 'LYNSU345JK',
        date: '08 October, 2020',
        orderAt: '@farmer_galaxy',    
        status: 'Shipping',
        deliveryDate: '12 oct. 2020',
        location: 'Yekaterinburg, Mira, 19',
        items:'2 Items purchased',
        price:'$299,43'
    }
]

export default class OrdersList extends Component {
    render() {
        return (
            <ul className="orders__list">
                {orders.map((item) => <OrdersItem key={item.id} price={item.price} items={item.items} location={item.location} deliveryDate={item.deliveryDate} status={item.status} orderAt={item.orderAt} date={item.date}id={item.id}></OrdersItem>)}
            </ul>
        );
    }
}
