import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../NavMenu';
import Main from '../Main';
import Registration from '../Registration';
import PreloaderMain from '../PreloaderMain';
import RoleSelectorPage from '../RoleSelectorPage';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';
import token from '../../utils/token';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isReg: false,
            role: '',
            token: '',
        };
    }
    handleChangeRole = (role) => {
        this.setState({isLoad:false});
        const url = URL + 'api/update/'
        axios.patch(url, {
            is_merchant: role === 'seller',
            first_name: 'Dmitry',
            last_name: 'Shchapin',
            address: 'Улица Пушкина, дом Колотушкина',
        }, {
            headers: {
                Authorization: 'EcoFoods ' + this.state.token,
            },
        }).then(resp => this.setState({isLoad: true, role: resp.data.is_merchant ? 'seller' : 'buyer'})).catch(err => console.error(err));
        this.setState({
            role:role,
            isLoad:true,
        });
    };
    componentDidMount() {
        setTimeout(() => {
            const currentToken = token.get();
            let state = {isLoad:true};
            if (currentToken) {
                const url = URL + 'api/update/';
                state['token'] = currentToken;
                state['isReg'] = true;
                axios
                    .patch(url, {}, {
                    headers: {
                        Authorization: 'EcoFoods ' + currentToken,
                    },})
                    .then(resp => state['role'] = resp.data.is_merchant ? 'seller' : 'buyer')
                    .catch(err => console.error(err))
                    .finally(() => this.setState(state));
            } else {
                this.setState(state);
            }
        }, 1000);
    }
    handleAuth = (email, password, isLogin) => {
        let url = URL;
        if (isLogin) {
            url += 'api/login/';
        } else {
            url += 'api/registration/';
        }
        axios
            .post(
                url,
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        Authorization: 'EcoFoods',
                    },
                }
            )
            .then((response) => {
                console.log(response.data.token);
                this.setState({
                    isReg: true,
                    token: response.data.token,
                });
                token.set(response.data.token);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const { isLoad, isReg, role } = this.state;
        return (
            <>
                {isLoad && (
                    <BrowserRouter>
                        {role && isReg && <Main role={role}></Main>}
                        {role && isReg && (
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="home"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/favorites"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="favorites"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/add"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="add"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/orders"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="orders"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/personalArea"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="personalArea"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/my-products"
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="my-products"
                                        ></NavMenu>
                                    )}
                                />
                                <Route
                                    render={() => (
                                        <NavMenu
                                            role={role}
                                            active="home"
                                        ></NavMenu>
                                    )}
                                />
                            </Switch>
                        )}
                        {isReg && !role && (
                            <RoleSelectorPage
                                handleChangeRole={this.handleChangeRole}
                            ></RoleSelectorPage>
                        )}
                        {!isReg && (
                            <Registration
                                handleAuth={this.handleAuth}
                            ></Registration>
                        )}
                    </BrowserRouter>
                )}
                {!isLoad && <PreloaderMain></PreloaderMain>}
            </>
        );
    }
}
