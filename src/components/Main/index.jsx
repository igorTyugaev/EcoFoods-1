import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../SearchPage';
import PersonalAreaPage from '../PersonalAreaPage';
import CardPage from '../CartPage'
import OrdersPage from '../OrdersPage'
import './style.css';

export default class Preloader extends Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <SearchPage></SearchPage>}
                    />
                    <Route
                        path="/favorites"
                        render={() => <CardPage></CardPage>}
                    />
                    <Route path="/add" render={() => <span>add</span>} />
                    <Route path="/ads" render={() => <OrdersPage></OrdersPage>} />
                    <Route
                        path="/personalArea"
                        render={() => <PersonalAreaPage></PersonalAreaPage>}
                    />
                    <Route render={() => <span>Главная</span>} />
                </Switch>
            </main>
        );
    }
}
