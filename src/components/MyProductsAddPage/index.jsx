import React, {Component} from 'react';
import Header from '../Header';
import './style.scss';
import img from './1.jpg';
import axios from 'axios';
import URL from '../../utils/url'
import MakeConfig from '../../utils/AxiosConfig';
import token from '../../utils/token'
import {Link} from "react-router-dom";

const imgs = [img, img, img, img, img, img];

export default class MyProductsAddPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            description: '',
            price: '',
            units: 'руб / лит.',
            selectedFile: null,
        }
    }

    handleBack = () => {
        window.history.back();
    };

    handleAdd = () => {
        const url = URL + 'api/merchant/add_product/'
        console.log(this.state.selectedFile);
        axios.post(url, {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            img: this.state.selectedFile,
            units: this.state.units,
        }, MakeConfig(token.get()))
            .then(resp => this.handleBack())
            .catch(err => console.log(err));
    };

    fileChangedHandler = (event) => {
        const fileImage = event.target.files[0];
        let reader = new FileReader();
        let base64String;

        reader.onload = (function (theFile) {
            return function (e) {
                let binaryData = e.target.result;
                base64String = window.btoa(binaryData);
                // document.getElementById('base64').value = base64String;
            };
        })(fileImage);
        reader.readAsBinaryString(fileImage);

        this.setState({
            selectedFile: base64String
        })
    }

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
                        value={this.state.name}
                        onChange={(ev) => this.setState({name: ev.target.value})}
                    />
                    <h2 className="my-products-add-page__title">Категория</h2>
                    <select
                        className="my-products-add-page__input"
                        value={this.state.category}
                        onChange={(ev) => this.setState({category: ev.target.value})}>
                        <option>Мясо</option>
                        <option>Рыба</option>
                        <option>Курица</option>
                        <option>Яйца</option>
                        <option>Овощи</option>
                        <option>Фрукты</option>
                        <option>Кисломолочная продукция</option>
                        <option>Молочная продукция</option>
                        <option>Ягоды</option>
                        <option>Замороженные продукты</option>
                        <option>Сыры</option>
                        <option>Грибы</option>
                        <option>Ягоды</option>
                        <option>Орехи</option>
                        <option>Безалкогольные напитки</option>
                        <option>Масло</option>
                        <option>Крупы</option>

                    </select>
                    <h2 className="my-products-add-page__title">Описание</h2>
                    <textarea
                        rows="8"
                        placeholder="Можно пару красивых слов?"
                        type="text"
                        className="my-products-add-page__input"
                        value={this.state.description}
                        onChange={(ev) => this.setState({description: ev.target.value})}
                    />
                    <h2 className="my-products-add-page__title">
                        Добавить фото
                    </h2>
                    <div className="my-products-add-page__imgs">
                        {imgs.map((item, index) => (
                            <img src={item} key={index} alt=""></img>
                        ))}
                    </div>
                    <input className="my-products-add-page__choothe" type="file" accept="image/*;capture=camera"
                           onChange={this.fileChangedHandler}/>
                    <h2 className="my-products-add-page__title">
                        Назначить цену
                    </h2>
                    <div className="my-products-add-page__cost">
                        <input
                            placeholder="145"
                            type="text"
                            className="my-products-add-page__input"
                            value={this.state.price}
                            onChange={(ev) => this.setState({price: ev.target.value})}
                        />
                        <select
                            className="my-products-add-page__input"
                            value={this.state.units}
                            onChange={(ev) => this.setState({units: ev.target.value})}
                        >
                            <option>руб / лит.</option>
                            <option>руб / кг.</option>
                            <option>руб / шт.</option>
                        </select>
                    </div>
                    <button className="my-products-add-page__add-button" onClick={this.handleAdd}>
                        Добавить товар
                    </button>
                </div>
            </>
        );
    }
}
