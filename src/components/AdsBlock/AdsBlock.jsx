import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default class AdsBlock extends Component {
    render() {
        const { img, place, price, units, productId, name } = this.props;
        return (
            <li className="announcement-block">
                <Link to={`/product/${productId}`}>
                    <img src={img} alt="" className="" />
                    <h3 className="announcement-block__title">
                        {name}
                    </h3>
                    <div className="announcement-block__price-container">
                        <b className="announcement-block__price">₽{price}</b>
                        <b className="announcement-block__price-units">{units.slice(3)}</b>
                    </div>
                    <span className="announcement-block__place">{place}</span>
                </Link>
            </li>
        );
    }
}
