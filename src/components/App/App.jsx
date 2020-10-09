import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../NavMenu';
import Main from '../Main';
import Registration from '../Registration';
import PreloaderMain from '../PreloaderMain';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isReg: false,
            token: '',
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoad: true,
            });
        }, 500);
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
        const { isLoad, isReg } = this.state;
        return (
            <>
                {isLoad && (
                    <BrowserRouter>
                        {isReg && <Main></Main>}
                        {isReg && (
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
                                    path="/ads"
                                    render={() => (
                                        <NavMenu active="ads"></NavMenu>
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
