import React, { Component } from 'react';
import Flickity from 'flickity';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import './style.scss';
import './flickity.min.css';

const advertisings = [
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
];

export default class Advertising extends Component {
    componentDidMount() {
        new Flickity('.advertising__carousel', {
            accessibility: true,
            adaptiveHeight: false,
            autoPlay: true,
            cellAlign: 'center',
            cellSelector: undefined,
            contain: false,
            draggable: '>1',
            dragThreshold: 3,
            freeScroll: false,
            friction: 0.2,
            groupCells: false,
            initialIndex: 0,
            lazyLoad: true,
            percentPosition: true,
            prevNextButtons: true,
            pageDots: true,
            resize: true,
            rightToLeft: false,
            setGallerySize: false,
            watchCSS: false,
            wrapAround: false,
        });
    }
    render() {
        return (
            <section className="advertising__wrapper">
                <div className="advertising">
                    <div className="advertising__carousel">
                        {advertisings.map((item) => (
                            <div
                                key={item.id}
                                className="advertising__carousel-cell"
                            >
                                <img src={item.img} alt="" />
                                <div className="advertising__overlay">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <b>{item.price}</b>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
