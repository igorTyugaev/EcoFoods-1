import React, { Component } from 'react';
import Search from '../Search';
import Advertising from '../Advertising';
import Categories from '../Categories';
import AdsList from '../AdsList';
import NotFound from '../NotFound';

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
            title: 'Сезонные овощи',
            description: `Лучшие сорта, отборные плоды — все это для вас! Высокое качество.`,
            price: 'от 231 руб/кг.',
            id: 1,
        },
        {
            img: img2,
            title: 'Фермерское мясо',
            description: `Жирок мягкий, однородного розового цвета. Сухожилия и мышцы прочно прикреплены к кости.`,
            price: 'от 843 руб',
            id: 2,
        },
        {
            img: img3,
            title: 'Вкусная выпечка',
            description: `Мы рады угостить Вас вкусными пирогами и выпечкой`,
            price: 'от 145 руб/шт.',
            id: 3,
        },
    ],
};

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertisings: [],
            announcements: [],
            searchValue: '',
            searchAnswer: [],
            makeSearch: false,
        };
    }

    componentDidMount() {
        const url = URL + 'api/home';
        const settings = MakeConfig(token.get());
        axios
            .get(url, settings)
            .then((resp) => {
                console.log(resp);
                this.setState({
                    announcements: resp.data.announcements.map((s) => ({
                        ...s,
                        id: s.uuid,
                    })),
                    advertisings: resp.data.advertisings.map((adv) => ({
                        ...adv,
                        id: adv.uuid,
                    })),
                });
            })
            .catch((err) => console.error(err));
    }
    handleSearchChange = (e) => {
        this.setState({
            searchValue: e.target.value,
            makeSearch: false,
        });
    };
    handleSearchSend = (e) => {
        e.preventDefault();
        axios
            .get(URL + `api/search_product?name=${this.state.searchValue}`)
            .then(resp => this.setState({
                makeSearch: true,
                searchAnswer: resp.data,
            }))
            .catch(err => console.log(err));
        
    };
    handleSearchcancel = () => {
        this.setState({
            searchValue: '',
            makeSearch: false,
        });
    };
    render() {
        const { advertisings, announcements, searchValue, makeSearch, searchAnswer } = this.state;
        return (
            <>
                <Search
                    handleSearchSend={this.handleSearchSend}
                    handleSearchChange={this.handleSearchChange}
                    searchValue={searchValue}
                ></Search>
                {!makeSearch && (
                    <>
                        <Advertising
                            url="/product"
                            advertisings={dataSearch.advertisings}
                        ></Advertising>
                        <Categories></Categories>
                    </>
                )}
                <AdsList
                    title={
                        !makeSearch
                            ? 'Рекомендации'
                            : `Найдено ${searchAnswer.length} позиций:`
                    }
                    announcements={makeSearch ? searchAnswer : announcements}
                ></AdsList>
                {searchAnswer.length === 0 && makeSearch && (
                    <NotFound
                        title="Товар не найден"
                        desc="Спасибо за покупки с помощью EcoFoods"
                        buttonText="Вернуться на Главную"
                        button={this.handleSearchcancel}
                    ></NotFound>
                )}
            </>
        );
    }
}