import React, { Component } from 'react';
import Title from '../Title';
import AdsBlock from '../AdsBlock';
import './style.scss';
import img from '../Advertising/img/1.jpg'

export default class AdsList extends Component {
    render() {
        const { announcements } = this.props;

        return (
            <section className="announcement-list__wrapper">
                <Title h2="Рекомендации"></Title>
                <ul className="announcement-list">
                    {announcements.map((item) => (
                        <AdsBlock
                            key={item.id}
                            productId={item.uuid}
                            img={item.img || img}
                            place={item.place}
                            price={item.price}
                            name={item.name}
                        ></AdsBlock>
                    ))}
                </ul>
            </section>
        );
    }
}
