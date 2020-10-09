import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../SearchPage';
import PersonalAreaPage from '../PersonalAreaPage';
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
                        render={() => <span>Избранное</span>}
                    />
                    <Route path="/add" render={() => <span>add</span>} />
                    <Route path="/ads" render={() => <span>ads</span>} />
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
