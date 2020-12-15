import React, { Component } from 'react';
import Header from '../Header';
import Products from '../Products';
import TableBlock from '../TableBlock';
import img from './1.jpg';
import BuyBlock from '../BuyBlock';
import axios from 'axios';
import URL from '../../utils/url';
import token from '../../utils/token';
import MakeConfig from '../../utils/AxiosConfig';
import Preloader from '../PreloaderMain';

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
    constructor(props) {
        super(props);
        const match = props.match;
        this.state = {
            loaded: false,
            orderId: match.params.orderId || '0',
            order: {},
        }
    }

    componentDidMount() {
        const url = URL+ 'api/get_orders/';
        const config = MakeConfig(token.get());
        axios.get(url, config)
            .then(resp => {console.log(this.state.orderId);this.setState({loaded: true, order: resp.data.filter(a => a.uuid === this.state.orderId)[0]})})
            .catch(err => console.error(err));
    }

    handleBack = () => {
        window.history.back();
    };

    render() {
        const {loaded, order} = this.state;
        return loaded ? (
            <>
                <Header button={this.handleBack} title="Детали заказа"></Header>
                <Products products={order.products}></Products>
                <TableBlock
                    staticItems={['Дата отгрузки', 'Продавец', 'Адрес', 'Способ доставки', 'Способ оплаты']}
                    dynamicItems={[
                        (order.date || 'Неизвестно'),
                        (order.products[0].product.merchant.first_name || 'Продавец') + ' ' + (order.products[0].product.merchant.last_name || 'Травы'),
                        (order.products[0].product.merchant.address || 'Уточняется у продавца'),
                    ]}
                    title="Детали доставки"
                ></TableBlock>
            </>
        ) : <Preloader></Preloader>;
    }
}
