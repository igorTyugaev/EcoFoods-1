import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header';
import MyProductItem from '../MyProductItem';
import img from './img/1.jpg';
import BuyBlock from '../BuyBlock';

export default class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBought: false,
            value: 0,
            productList: [
                {
                    img,
                    title: 'Фруктовый салат',
                    text: 'Екатеринбург, Мира, 19',
                    price: '20.32',
                    id: 1,
                },
            ],
        };
    }
    componentDidMount() {
        const { productList } = this.state;
        const value = productList.reduce(
            (accumulator, currentValue) =>
                {
                    return accumulator + Number(currentValue.price);
                }
        , 0);
        this.setState({
            value:value,
        });
    }
    handleBuy = () => {
        this.setState({
            isBought: true,
        });
        //...
    };

    render() {
        const { productList, value, isBought } = this.state;
        return (
            <>
                {isBought && <Redirect push to="/cart/delivery" />}
                <Header title="Корзина"></Header>
                {productList.map((item) => (
                    <MyProductItem
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                        price={item.price}
                        canEdit={false}
                    ></MyProductItem>
                ))}
                <BuyBlock
                    isBought={false}
                    total={value}
                    handleBuy={this.handleBuy}
                ></BuyBlock>
            </>
        );
    }
}
