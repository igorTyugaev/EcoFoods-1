import React, { Component } from 'react';
import Advertising from '../Advertising';
import Header from '../Header';
import InputCount from '../InputCount/';
import SettingsItem from '../SettingsItem';
import './style.scss';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import locationImg from './img/location.svg';
import userImg from './img/user.svg';

const data = {
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
};

export default class ProductPage extends Component {
    handleBack = () => {
        window.history.back();
    };
    render() {
        return (
            <>
                <Header
                    button={this.handleBack}
                    title="Product details"
                ></Header>
                <Advertising advertisings={data.advertisings}></Advertising>
                <h1 className="product__title">Melon fruit salad</h1>
                <div className="product__cost-row">
                    <div className="product__cost">
                        <b>$20,32 </b>
                        <span>per Lit</span>
                    </div>
                    <InputCount></InputCount>
                </div>
                <h3 className="product__des-title">Description</h3>
                <p className="product__des-main">
                    The Nike Air Max 270 React ENG combines a full-length React
                    foam midsole with a 270 Max Air unit for unrivaled comfort
                    and a striking visual experience.
                </p>
                <SettingsItem
                    img={locationImg}
                    title="Location"
                    text="Yekaterinburg, Mira, 19"
                ></SettingsItem>
                <SettingsItem
                    img={userImg}
                    title="Продавец"
                    text="@farmer_galaxy"
                ></SettingsItem>
                <SettingsItem
                    img={locationImg}
                    title="Location"
                    text="Yekaterinburg, Mira, 19"
                ></SettingsItem>
                <SettingsItem
                    img={locationImg}
                    title="Location"
                    text="Yekaterinburg, Mira, 19"
                ></SettingsItem>
            </>
        );
    }
}
