import React, {Component} from 'react';
import Advertising from '../Advertising';
import Header from '../Header';
import InputCount from '../InputCount/';
import SettingsItem from '../SettingsItem';
import BuyBlock from '../BuyBlock';
import './style.scss';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import locationImg from './img/location.svg';
import userImg from './img/user.svg';

import URL from '../../utils/url';
import token from '../../utils/token';
import MakeConfig from '../../utils/AxiosConfig';
import axios from 'axios';
import Preloader from '../PreloaderMain';


import {addItemToCart, restoreCart} from '../../store/actionCreators/cartActionCreators'
import {connect} from 'react-redux';
import cart from '../../store/reducers/cart';
import telephoneImg from "../SettingsList/telephone.svg";
import {Link} from "react-router-dom";

const defaultData = {
    advertisings: [
        {
            img: img1,
            id: 1,
        },
        {
            img: img2,
            id: 2,
        },
        {
            img: img3,
            id: 3,
        },
        {
            img: img1,
            id: 4,
        },
        {
            img: img2,
            id: 5,
        },
    ],
    cost: 20,
    unit: 'per Lit',
};

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.value,
    };
};
const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item)),
});

class ProductPage extends Component {
    constructor(props) {
        super(props);
        const match = props.match;
        this.state = {
            value: '0.00',
            productId: match ? match.params.productId : 0,
            data: {},
            loaded: false,
            isBought: false,
        };
    }

    componentDidMount() {
        const url = URL + 'api/home';
        const settings = MakeConfig(token.get());
        axios
            .get(url, settings)
            .then((resp) => {
                const data = resp.data;
                console.log(data);
                const advertisings = data.advertisings.filter(
                    (e) => e.uuid === this.state.productId
                );
                const announcements = data.announcements.filter(
                    (e) => e.uuid === this.state.productId
                );
                if (advertisings.length > 0) {
                    this.setState({
                        loaded: true,
                        value: advertisings[0].price,
                        data: advertisings[0],
                    });
                } else if (announcements.length > 0) {
                    this.setState({
                        loaded: true,
                        value: announcements[0].price,
                        data: announcements[0],
                    });
                }
            })
            .catch((err) => console.error(err));
    }

    handleBack = () => {
        window.history.back();
    };

    handleBuy = () => {
        this.props.addItemToCart({
            uuid: this.state.productId,
            quantity: Number(this.state.value) / Number(this.state.data.price),
            data: this.state.data,
        });
        this.setState({isBought: true});
    };

    handleChangeCount = (count) => {
        const value = count * this.state.data.price;
        this.setState({
            value: value.toFixed(2),
        });
    };

    render() {
        const {value, data, loaded} = this.state;
        console.log('data')
        console.log(data)
        console.log('data')
        return loaded ? (
            <>
                <Header
                    button={this.handleBack}
                    title={data.name}
                ></Header>
                <Advertising
                    advertisings={data.images.map(i => ({
                        img: i.image.image ? 'data:image/jpeg;base64,' + i.image.image : img1,
                        id: i.image.uuid
                    }))}
                ></Advertising>
                <div className="product__cost-row">
                    <div className="product__cost">
                        <div className="product__cost_col">
                            <b>{data.price}</b>
                            <span>{data.units}</span>
                        </div>
                        <InputCount
                            handleChangeCount={this.handleChangeCount}
                        ></InputCount>
                    </div>
                </div>
                <h3 className="product__des-title">Описание</h3>
                <p className="product__des-main">{data.description || 'Упс… Кажется, продавец не добавил описание товара('}</p>
                <SettingsItem
                    img={locationImg}
                    title="Локация"
                    text={data.merchant ? data.merchant.address : ' '}
                ></SettingsItem>
                <SettingsItem
                    img={userImg}
                    title="Продавец"
                    text={data.merchant ? (data.merchant.first_name + ' ' + data.merchant.last_name) : ' '}
                ></SettingsItem>
                <a href={data.merchant.phone_number || ''}>
                    <SettingsItem
                        img={telephoneImg}
                        title="Телефон"
                        text={data.merchant.phone_number || 'Номер не указан'}
                    ></SettingsItem>
                </a>
                <BuyBlock
                    isBought={this.state.isBought}
                    total={value}
                    handleBuy={this.handleBuy}
                ></BuyBlock>
            </>
        ) : (
            <Preloader></Preloader>
        );
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);