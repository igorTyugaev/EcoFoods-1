import React, { Component } from 'react';
import logo from './logo.svg';
import './style.scss';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            subPassword: '',
            error: false,
            reg: false,
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { handleAuth } = this.props;
        const { email, password, subPassword, reg } = this.state;
        if (email && password) {
            if (reg) {
                if (password === subPassword) {
                    handleAuth(email, password, false);
                } else {
                    this.setState({
                        error: true,
                    });
                }
            } else {
                handleAuth(email, password, true);
            }
        } else {
            this.setState({
                error: true,
            });
        }
    };
    handleChangeSignIn = (e) => {
        e.preventDefault();
        this.setState({
            reg: false,
        });
    };
    handleChangeSignUp = (e) => {
        e.preventDefault();
        this.setState({
            reg: true,
        });
    };
    render() {
        const { email, password, subPassword, error, reg } = this.state;
        return (
            <div className="registration">
                <img src={logo} alt="" className="logo" />
                <h2 className="registration__title">Welcome to EcoFoods</h2>
                {reg ? (
                    <span>Create an new account</span>
                ) : (
                    <span>Sign in to continue</span>
                )}
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
                            (email
                                ? 'registration__input-wrapper_active'
                                : 'registration__input-wrapper_error')
                        }
                    >
                        <svg
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 1.25C0 0.697715 0.447715 0.25 1 0.25H19C19.5523 0.25 20 0.697715 20 1.25V14.75C20 15.3023 19.5523 15.75 19 15.75H1C0.447715 15.75 0 15.3023 0 14.75V1.25ZM2 2.25V13.75H18V2.25H2Z"
                                fill="#9098B1"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.240724 0.599219C0.600142 0.17989 1.23144 0.131322 1.65077 0.49074L9.99999 7.64706L18.3492 0.49074C18.7685 0.131322 19.3998 0.17989 19.7593 0.599219C20.1187 1.01855 20.0701 1.64985 19.6508 2.00927L10.6508 9.72339C10.2763 10.0444 9.72369 10.0444 9.3492 9.72339L0.349204 2.00927C-0.0701254 1.64985 -0.118694 1.01855 0.240724 0.599219Z"
                                fill="#9098B1"
                            />
                        </svg>

                        <input
                            onChange={(e) => this.handleChange(e)}
                            placeholder="Your Email"
                            type="text"
                            name="email"
                            value={email}
                        />
                    </div>
                    <div
                        className={
                            'registration__input-wrapper ' +
                            (password
                                ? 'registration__input-wrapper_active'
                                : 'registration__input-wrapper_error')
                        }
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 7.75C0 7.19772 0.447715 6.75 1 6.75H19C19.5523 6.75 20 7.19772 20 7.75V19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19V7.75ZM2 8.75V18H18V8.75H2Z"
                                fill="#9098B1"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 2C7.48134 2 5.375 4.13206 5.375 6.841C5.375 7.39328 4.92728 7.841 4.375 7.841C3.82272 7.841 3.375 7.39328 3.375 6.841C3.375 3.09919 6.30641 0 10 0C13.6936 0 16.625 3.09919 16.625 6.841C16.625 7.39328 16.1773 7.841 15.625 7.841C15.0727 7.841 14.625 7.39328 14.625 6.841C14.625 4.13206 12.5187 2 10 2Z"
                                fill="#9098B1"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 11.7257C10.5523 11.7257 11 12.1734 11 12.7257V13.8507C11 14.403 10.5523 14.8507 10 14.8507C9.44772 14.8507 9 14.403 9 13.8507V12.7257C9 12.1734 9.44772 11.7257 10 11.7257Z"
                                fill="#9098B1"
                            />
                        </svg>

                        <input
                            onChange={(e) => this.handleChange(e)}
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                        />
                    </div>
                    {reg && (
                        <div
                            className={
                                'registration__input-wrapper ' +
                                (subPassword && !error
                                    ? 'registration__input-wrapper_active'
                                    : 'registration__input-wrapper_error')
                            }
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 7.75C0 7.19772 0.447715 6.75 1 6.75H19C19.5523 6.75 20 7.19772 20 7.75V19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19V7.75ZM2 8.75V18H18V8.75H2Z"
                                    fill="#9098B1"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 2C7.48134 2 5.375 4.13206 5.375 6.841C5.375 7.39328 4.92728 7.841 4.375 7.841C3.82272 7.841 3.375 7.39328 3.375 6.841C3.375 3.09919 6.30641 0 10 0C13.6936 0 16.625 3.09919 16.625 6.841C16.625 7.39328 16.1773 7.841 15.625 7.841C15.0727 7.841 14.625 7.39328 14.625 6.841C14.625 4.13206 12.5187 2 10 2Z"
                                    fill="#9098B1"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 11.7257C10.5523 11.7257 11 12.1734 11 12.7257V13.8507C11 14.403 10.5523 14.8507 10 14.8507C9.44772 14.8507 9 14.403 9 13.8507V12.7257C9 12.1734 9.44772 11.7257 10 11.7257Z"
                                    fill="#9098B1"
                                />
                            </svg>

                            <input
                                onChange={(e) => this.handleChange(e)}
                                placeholder="Password"
                                type="password"
                                name="subPassword"
                                value={subPassword}
                            />
                        </div>
                    )}

                    {reg ? <button>Sign Up</button> : <button>Sign In</button>}
                </form>
                {!reg && (
                    <a href="/" className="registration__a">
                        Forgot Password?
                    </a>
                )}
                {reg ? (
                    <span>
                        Have a account?{' '}
                        <a href="/" onClick={(e) => this.handleChangeSignIn(e)}>
                            Sign In
                        </a>
                    </span>
                ) : (
                    <span>
                        Don’t have a account?
                        <a href="/" onClick={(e) => this.handleChangeSignUp(e)}>
                            Register
                        </a>
                    </span>
                )}
            </div>
        );
    }
}
