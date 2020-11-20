import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../SearchPage';
import PersonalAreaPage from '../PersonalAreaPage';
import MyProductsPage from '../MyProductsPage';
import OrdersPage from '../OrdersPage';
import ProductPage from '../ProductPage';
import OrderDetails from '../OrderDetails';
import SalesPage from '../SalesPage';
import MyProductsAddPage from '../MyProductsAddPage';
import './style.css';

export default class Main extends Component {
    render() {
        const { role } = this.props;
        return (
            <main className="main">
                {role === 'buyer' && (
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
                            path="/product/:productId"
                            component={ProductPage}
                        />
                        <Route
                            exact
                            path="/orders/item"
                            render={() => <OrderDetails></OrderDetails>}
                        />
                        <Route
                            path="/orders/item/:orderId"
                            component={OrderDetails}
                        />
                        <Route                           
                            path="/orders"
                            render={() => <OrdersPage></OrdersPage>}
                        />

                        <Route
                            path="/personalArea"
                            render={() => <PersonalAreaPage></PersonalAreaPage>}
                        />
                        <Route render={() => <span>404</span>} />
                    </Switch>
                )}
                {role === 'seller' && (
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <SalesPage></SalesPage>}
                        />
                        <Route
                            exact
                            path="/product"
                            render={() => <ProductPage></ProductPage>}
                        />
                        <Route
                            path="/my-products/add"
                            render={() => (
                                <MyProductsAddPage></MyProductsAddPage>
                            )}
                        />
                        <Route
                            path="/my-products"
                            render={() => <MyProductsPage></MyProductsPage>}
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
                        <Route render={() => <span>404</span>} />
                    </Switch>
                )}
            </main>
        );
    }
}
