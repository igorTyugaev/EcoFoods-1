import React, {Component} from 'react';
import './style.scss';

import edit from './edit.svg';
import trash from './trash.svg';
import InputCount from "../InputCount";

export default class MyProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.quantity || 1,
        };
    }
    handleChangeCount = (count) => {
        const { handleChangeCount, id } = this.props;
        if (handleChangeCount) {
            handleChangeCount(id, count);
        }
        this.setState({
            value: count,
        });
    };

    render() {
        const {value} = this.state;
        const {img, title, text, price, quantity, canEdit = true, id='', handleDelete = (uuid) => {},} = this.props;
        return (
            <li className="my-product-item">
                <div className="my-product-item-container">
                    <div className="my-product-item__content">
                        <img src={img} alt="" className="my-product-item__img"/>
                        <div className="my-product-item__main">
                            <div className="my-product-item__row">
                                <div className="my-product-item__text">
                                    <h3>{title}</h3>
                                    <p>От: {text}</p>
                                </div>
                            </div>
                            <div className="my-product-item__row">
                                <span>{price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-product-item__row-container">
                        <div className="my-product-item__buttons">
                            {canEdit && <img src={edit} alt=""/>}
                            <img onClick={() => handleDelete(id)} src={trash} alt=""/>
                        </div>
                        <InputCount
                            handleChangeCount={this.handleChangeCount}
                            value={value}
                        ></InputCount>
                    </div>
                </div>
                <hr/>
            </li>
        );
    }
}
