import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../NavMenu';
import Main from '../Main';
import Registration from '../Registration';
import PreloaderMain from '../PreloaderMain';
import RoleSelectorPage from '../RoleSelectorPage';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isReg: true,
            role: false,
            token: '',
        };
    }
    handleChangeRole = (role) => {
        this.setState({
            role,
        });
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoad: true,
            });
        }, 1000);
    }
    handleAuth = (email, password, isLogin) => {
        let url = 'http://185.68.21.29:8000/';
        if (isLogin) {
            url += 'login/';
        } else {
            url += 'registration/';
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
                        {role && isReg && <Main></Main>}
                        {role && isReg && (
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <NavMenu active="home"></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/favorites"
                                    render={() => (
                                        <NavMenu active="favorites"></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/add"
                                    render={() => (
                                        <NavMenu active="add"></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/orders"
                                    render={() => (
                                        <NavMenu active="orders"></NavMenu>
                                    )}
                                />
                                <Route
                                    path="/personalArea"
                                    render={() => (
                                        <NavMenu active="personalArea"></NavMenu>
                                    )}
                                />
                                <Route
                                    render={() => (
                                        <NavMenu active="home"></NavMenu>
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
