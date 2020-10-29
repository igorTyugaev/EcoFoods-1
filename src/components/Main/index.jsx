import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../SearchPage';
import PersonalAreaPage from '../PersonalAreaPage';
import CardPage from '../CartPage';
import OrdersPage from '../OrdersPage';
import ProductPage from '../ProductPage';
import OrderDetails from '../OrderDetails';
import './style.css';

export default class Main extends Component {
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
                        exact
                        path="/product"
                        render={() => <ProductPage></ProductPage>}
                    />
                    <Route
                        path="/favorites"
                        render={() => <CardPage></CardPage>}
                    />
                    <Route
                        path="/orders/item"
                        render={() => <OrderDetails></OrderDetails>}
                    />
                    <Route
                        path="/orders"
                        render={() => <OrdersPage></OrdersPage>}
                    />

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
