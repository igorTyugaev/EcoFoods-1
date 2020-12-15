import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import './style.scss';
import img from '../ProductPage/img/1.jpg'

export default class Products extends Component {
    render() {
        const { products } = this.props;
        return (
            <section className="products">
                <h2 className="products__title">Продукты</h2>
                <ul className="products__list">
                    {products.map((item) => (
                        <ProductItem
                            key={item.product.uuid}
                            quantity={item.quantity}
                            price={item.product.price}
                            img={item.img || img}
                            location={item.product.merchant.address}
                            title={item.product.name}
                        ></ProductItem>
                    ))}
                </ul>
            </section>
        );
    }
}
