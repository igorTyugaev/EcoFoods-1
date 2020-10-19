import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default class AdsBlock extends Component {
    render() {
        const { img, place, price } = this.props;
        return (
            <li className="announcement-block">
                <Link to="/product">
                    <img src={img} alt="" className="" />
                    <h3 className="announcement-block__title">
                        Молоко с пивом
                    </h3>
                    <b className="announcement-block__price">{price}</b>
                    <span className="announcement-block__place">{place}</span>
                </Link>
            </li>
        );
    }
}
