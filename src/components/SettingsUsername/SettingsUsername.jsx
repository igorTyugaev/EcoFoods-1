import React, { Component } from 'react';
import logo from './logo.svg';
import './style.scss';

export default class SettingsUsername extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName || '',
            lastName: props.lastName || '', 
            error: false,     
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.trim(),
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName } = this.state;
        if (!firstName || !lastName) {
            return;
        }
        const { handleChangeName } = this.props;
        if (!handleChangeName) return;

        handleChangeName(firstName, lastName);
    };

    render() {
        const { firstName, lastName, error } = this.state;
        return (
            <div className="registration">
                <img src={logo} alt="" className="logo" />
                <h2 className="registration__title">Представьтесь пожалуйста</h2>
                <form
                    onSubmit={(e) => this.handleSubmit(e)}
                    className={
                        'registration__form ' +
                        (error ? 'registration__form_error' : undefined)
                    }
                >
                    <div
                        className={
                            'registration__input-wrapper ' +
                            (lastName
                                ? 'registration__input-wrapper_active'
                                : 'registration__input-wrapper_error')
                        }
                    >
                        <input
                            onChange={(e) => this.handleChange(e)}
                            placeholder="Фамилия"
                            type="text"
                            name="lastName"
                            value={lastName}
                        />
                    </div>
                    <div
                        className={
                            'registration__input-wrapper ' +
                            (firstName
                                ? 'registration__input-wrapper_active'
                                : 'registration__input-wrapper_error')
                        }
                    >
                        <input
                            onChange={(e) => this.handleChange(e)}
                            placeholder="Имя"
                            type="text"
                            name="firstName"
                            value={firstName}
                        />
                    </div>
                    <button>Продолжить</button>
                </form>  
            </div>
        );
    }
}
