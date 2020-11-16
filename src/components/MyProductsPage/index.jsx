import React, { Component } from 'react';
import Header from '../Header';
import MyProductsList from '../MyProductsList';
import { Link } from 'react-router-dom';

export default class MyProductsPage extends Component {
    render() {
        return (
            <>
                <Header title="Мои продукты"></Header>
                <MyProductsList></MyProductsList>
                <Link to="/my-products/add">
                    <button
                        style={{
                            position: 'fixed',
                            bottom: '100px',
                            color: '#fff',
                            background: '#1DDE7D',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            fontSize: '28px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                        className="my-products-add"
                    >
                        +
                    </button>
                </Link>
            </>
        );
    }
}
