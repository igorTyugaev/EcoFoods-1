import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class BuyBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
        };
    }
    handleBuy = () => {
        //axios
        this.setState({
            isDone: true,
        });
    };
    render() {
        const { total } = this.props;
        const { isDone } = this.state;
        return (
            <div className="buy-block">
                {!isDone ? (
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
