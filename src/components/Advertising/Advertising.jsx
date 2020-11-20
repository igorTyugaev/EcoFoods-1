import React, { Component } from 'react';
import Flickity from 'flickity';
import './style.scss';
import './flickity.min.css';
import { Link } from 'react-router-dom';

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
        const { advertisings = [], url } = this.props;
        return (
            <section className="advertising__wrapper">
                <div className="advertising">
                    <div className="advertising__carousel">
                        {advertisings.map((item) =>
                            url ? (
                                <Link
                                    to={`${url}/${item.id}`}
                                    key={item.id}
                                    className="advertising__carousel-cell"
                                >
                                    <img src={item.img} alt="" />
                                    <div
                                        className={
                                            item.title
                                                ? 'advertising__overlay'
                                                : undefined
                                        }
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <b>{item.price}</b>
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    key={item.id}
                                    className="advertising__carousel-cell"
                                >
                                    <img src={item.img} alt="" />
                                    <div
                                        className={
                                            item.title
                                                ? 'advertising__overlay'
                                                : undefined
                                        }
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <b>{item.price}</b>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
