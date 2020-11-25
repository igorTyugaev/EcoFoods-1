import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class BuyBlock extends Component {
    constructor(props) {
        super(props);
    }
    handleBuy = () => {
        const {handleBuy} = this.props;
        handleBuy();
    };
    render() {
        const { total, isBought } = this.props;
        return (
            <div className="buy-block">
                {!isBought ? (
                    <>
                        <div className="">
                            <b className="">Итого:</b>
                            <span className="">{total}</span>
                        </div>
                        <button
                            onClick={() => this.handleBuy()}
                            className="buy-block__button"
                        >
                            Купить
                        </button>
                    </>
                ) : (
                    <Link className="buy-block__button_active" to="/orders">
                        <button className="buy-block__button buy-block__button_active">
                            Перейти в заказам
                        </button>
                    </Link>
                )}
            </div>
        );
    }
}
