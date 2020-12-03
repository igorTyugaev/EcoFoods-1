import React, { Component } from 'react';
import './style.scss';

import edit from './edit.svg';
import trash from './trash.svg';

export default class MyProductItem extends Component {
    render() {
        const { img, title, text, price, canEdit = true } = this.props;
        return (
            <li className="my-product-item">
                <div className="my-product-item__content">
                    <img src={img} alt="" className="my-product-item__img" />
                    <div className="my-product-item__main">
                        <div className="my-product-item__row">
                            <div className="my-product-item__text">
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                        <div className="my-product-item__row">
                            <span>{price}</span>
                        </div>
                    </div>
                </div>

                <div className="my-product-item__buttons">
                    {canEdit && <img src={edit} alt="" />}
                    <img src={trash} alt="" />
                </div>
            </li>
        );
    }
}
