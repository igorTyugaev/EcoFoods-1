import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import './style.scss';

export default class Products extends Component {
    render() {
        const { products } = this.props;
        return (
            <section className="products">
                <h2 className="products__title">Products</h2>
                <ul className="products__list">
                    {products.map((item) => (
                        <ProductItem
                            key={item.id}
                            quantity={item.quantity}
                            price={item.price}
                            img={item.img}
                            location={item.location}
                            title={item.title}
                        ></ProductItem>
                    ))}
                </ul>
            </section>
        );
    }
}
