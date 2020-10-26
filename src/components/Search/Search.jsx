import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {
    render() {
        return (
            <>
                <div className="search__wrapper">
                    <form className="search">
                        <input type="text" placeholder="Search Product" />
                        <button>Найти</button>
                    </form>
                </div>
                <div className="search__offset"></div>
            </>
        );
    }
}
