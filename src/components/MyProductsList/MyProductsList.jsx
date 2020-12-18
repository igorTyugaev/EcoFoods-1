import React, { Component } from 'react';
import MyProductItem from '../MyProductItem';
import './style.scss';
import img from './img/1.jpg';
import URL from '../../utils/url';
import token from '../../utils/token';
import axios from 'axios';
import MakeConfig from '../../utils/AxiosConfig';


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
    constructor(props) {
        super(props);
        this.state = {
            myProducts: [],
        };
    }

    componentDidMount() {
        const url = URL + 'api/merchant/get_products';
        axios.get(url, MakeConfig(token.get()))
            .then(resp => this.setState({myProducts: resp.data}))
            .catch(err => console.log(err));
    }

    render() {
        const {myProducts} = this.state;

        console.log('myProducts: ')
        console.log(myProducts)
        console.log('- - - - -- -')
        return (
            <ul className="settings__list">
                {myProducts.map((item) => (
                    <MyProductItem
                        key={item.uuid}
                        img={item.images.length > 0 ? 'data:image/png;base64,' + item.images[0].image.image : img}
                        title={item.name}
                        text={item.description}
                        price={item.price}
                        disableCount={true}
                    ></MyProductItem>
                ))}
            </ul>
        );
    }
}
