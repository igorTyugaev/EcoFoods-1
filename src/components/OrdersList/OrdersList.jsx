import axios from 'axios';
import React, {Component} from 'react';
import OrdersItem from '../OrdersItem'
import './style.scss';
import MakeConfig from '../../utils/AxiosConfig';
import URL from '../../utils/url';
import token from '../../utils/token';
import Preloader from '../PreloaderMain'


const orders = [
    {
        id: 'LQNSU346JK',
        date: '08 October, 2020',
        orderAt: 'farmer_galaxy',
        status: 'Shipping',
        deliveryDate: '12 oct. 2020',
        location: 'Yekaterinburg, Mira, 19',
        items: '2 Items purchased',
        price: '$299,43'
    },
    {
        id: 'LQNSU345JK',
        date: '08 October, 2020',
        orderAt: 'farmer_galaxy',
        status: 'Shipping',
        deliveryDate: '12 oct. 2020',
        location: 'Yekaterinburg, Mira, 19',
        items: '2 Items purchased',
        price: '$299,43'
    },
    {
        id: 'LYNSU345JK',
        date: '08 October, 2020',
        orderAt: 'farmer_galaxy',
        status: 'Shipping',
        deliveryDate: '12 oct. 2020',
        location: 'Yekaterinburg, Mira, 19',
        items: '2 Items purchased',
        price: '$299,43'
    }
]

export default class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loaded: false,
        }
    }

    componentDidMount() {
        const url = URL + 'api/get_orders/';
        const config = MakeConfig(token.get());
        console.log('config: ', config);
        axios.get(url, config)
            .then(resp => {
                console.log('Data from:', url);
                console.log(resp.data);
                console.log('- - - - - - - - -');
                this.setState({loaded: true, orders: resp.data})
            })
            .catch(err => console.error(err));
    }


    render() {
        const {orders, loaded} = this.state;
        return loaded ? (
            <ul className="orders__list">
                {orders.map((item) => <OrdersItem key={item.uuid}
                                                  price={parseInt(item.products[0].product.price) * parseInt(item.products[0].quantity)}
                                                  items={`${item.products[0].quantity}  шт. куплено`}
                                                  location={item.products[0].product.merchant.address || 'Уточняется у продавца'}
                                                  deliveryDate={item.deliveryDate || 'Неизвестно'}
                                                  status={item.status === 'opened' ? 'открыт' : 'завершён'}
                                                  orderAt={(item.products[0].product.merchant.first_name || 'Имя') + ' ' + (item.products[0].product.merchant.last_name || 'Фамилия')}
                                                  date={item.created_at.substring(0, 10) || 'DD.MM.YY'}
                                                  id={item.uuid}></OrdersItem>)}
            </ul>
        ) : <Preloader></Preloader>;
    }
}
