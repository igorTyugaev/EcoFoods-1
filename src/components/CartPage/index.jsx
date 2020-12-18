import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header';
import MyProductItem from '../MyProductItem';
import img from './img/1.jpg';
import BuyBlock from '../BuyBlock';
import {connect} from 'react-redux';
import {removeItem, changeItemCount} from '../../store/actionCreators/cartActionCreators';


const mapStateToProps = (state, ownProps) => {
    return {
        productList: Object.values(state.cart.value),
        cart: state.cart.values,
    };
};

const mapDispatchToProps = dispatch => ({
    removeItem: (uuid) => dispatch(removeItem(uuid)),
    changeItemCount: (uuid, newCount) => dispatch(changeItemCount(uuid, newCount)),

});

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBought: false,
            // value: 0,
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

    handleDelete = (uuid) => {
        this.props.removeItem(uuid);
    }

    handleChangeCount = (uuid, newCount) => {
        this.props.changeItemCount(uuid, newCount);
    }

    handleBuy = () => {
        this.setState({
            isBought: true,
        });
        //...
    };

    render() {
        const {isBought} = this.state;
        const {productList} = this.props;
        const value = productList.reduce((accumulator, currentValue) => {
            return (
                accumulator +
                Number(currentValue.data.price) * Number(currentValue.quantity)
            );
        }, 0);
        console.log(productList);
        return (
            <>
                {isBought && <Redirect push to="/cart/delivery"/>}
                <Header title="Корзина"></Header>
                {productList.map((item) => (
                    <MyProductItem
                        key={item.uuid}
                        id={item.uuid}
                        img={item.data.images.length > 0 ? 'data:image/png;base64,' + item.data.images[0].image.image : img}
                        title={item.data.name}
                        text={item.data.merchant.first_name + ' ' + item.data.merchant.last_name || 'Продавец не указан'}
                        handleDelete={this.handleDelete}
                        handleChangeCount={this.handleChangeCount}
                        price={item.data.price}
                        units={item.data.units}
                        quantity={item.quantity}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);