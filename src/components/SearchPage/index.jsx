import React, { Component } from 'react';
import Search from '../Search';
import Advertising from '../Advertising';
import Categories from '../Categories';
import AdsList from '../AdsList';

export default class SearchPage extends Component {
    render() {
        return (
            <>
                <Search></Search>
                <Advertising></Advertising>
                <Categories></Categories>
                <AdsList></AdsList>
            </>
        );
    }
}
