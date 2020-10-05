import React, { Component } from 'react';
import Title from '../Title';
import AdsBlock from '../AdsBlock';
import './style.scss';

import img1 from './img/1.jpg';

const announcements = [
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
];

export default class AdsList extends Component {
    render() {
        return (
            <section className="announcement-list__wrapper">
                <Title h2="Recommendation"></Title>
                <ul className="announcement-list">
                    {announcements.map((item) => (
                        <AdsBlock
                            key={item.id}
                            img={item.img}
                            place={item.place}
                            price={item.price}
                        ></AdsBlock>
                    ))}
                </ul>
            </section>
        );
    }
}
