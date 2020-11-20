import React, { Component } from 'react';
import Search from '../Search';
import Advertising from '../Advertising';
import Categories from '../Categories';
import AdsList from '../AdsList';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import axios from 'axios';
import URL from '../../utils/url';
import token from '../../utils/token';
import MakeConfig from '../../utils/AxiosConfig';

const dataSearch = {
    announcements: [
        {
            id: 1,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 2,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 3,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 4,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 5,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
        },
        {
            id: 6,
            img: img1,
            place: 'Екатеринбург, Уралмаш',
            price: '100руб/л',
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

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertisings: [],
            announcements: [], 
        };
    }

    componentDidMount() {
        const url = URL + 'api/home';
        const settings = MakeConfig(token.get());
        axios.get(url, settings)
            .then(resp => this.setState({announcements: resp.data.announcements.map(s => ({...s, id:s.uuid})), advertisings:resp.data.advertisings.map(adv => ({...adv, id:adv.uuid}))}))
            .catch(err => console.error(err));
    }

    render() {
        const {advertisings, announcements} = this.state;
        return (
            <>
                <Search></Search>
                <Advertising
                    url="/product"
                    advertisings={advertisings}
                ></Advertising>
                <Categories></Categories>
                <AdsList announcements={announcements}></AdsList>
            </>
        );
    }
}
