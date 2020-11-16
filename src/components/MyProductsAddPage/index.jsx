import React, { Component } from 'react';
import Header from '../Header';
import './style.scss';
import img from './1.jpg';

const imgs = [img, img, img, img, img, img];

export default class MyProductsAddPage extends Component {
    handleBack = () => {
        window.history.back();
    };
    render() {
        return (
            <>
                <Header
                    button={this.handleBack}
                    title="Добавить товар"
                ></Header>
                <div className="my-products-add-page">
                    <h2 className="my-products-add-page__title">Название</h2>
                    <input
                        placeholder="Коктейль кисломолочный"
                        type="text"
                        className="my-products-add-page__input"
                    />
                    <h2 className="my-products-add-page__title">Категория</h2>
                    <select className="my-products-add-page__input">
                        <option>Пункт 1</option>
                        <option>Пункт 2</option>
                    </select>
                    <h2 className="my-products-add-page__title">Описание</h2>
                    <textarea
                        rows="8"
                        placeholder="Можно пару красивых слов?"
                        type="text"
                        className="my-products-add-page__input"
                    />
                    <h2 className="my-products-add-page__title">
                        Добавить фото
                    </h2>
                    <div className="my-products-add-page__imgs">
                        {imgs.map((item, index) => (
                            <img src={item} key={index} alt=""></img>
                        ))}
                        <button>+</button>
                    </div>
                    <h2 className="my-products-add-page__title">
                        Назначить цену
                    </h2>
                    <div className="my-products-add-page__cost">
                        <input
                            placeholder="$1.245"
                            type="text"
                            className="my-products-add-page__input"
                        />
                        <select className="my-products-add-page__input">
                            <option>руб / лит.</option>
                            <option>руб / кг.</option>
                        </select>
                    </div>
                    <button className="my-products-add-page__add-button">
                        Добавить товар
                    </button>
                </div>
            </>
        );
    }
}
