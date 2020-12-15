import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {
    render() {
        const {
            handleSearchSend,
            handleSearchChange,
            searchValue,
        } = this.props;
        return (
            <>
                <div className="search__wrapper">
                    <form
                        className="search"
                        onSubmit={(e) => handleSearchSend(e)}
                    >
                        <input
                            value={searchValue}
                            onChange={(e) => handleSearchChange(e)}
                            type="text"
                            placeholder="Искать на EcoFoods"
                        />
                        <button>Найти</button>
                    </form>
                </div>
                <div className="search__offset"></div>
            </>
        );
    }
}
