import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './reset.scss';
import store from './store/store';
import { removeToken } from './store/actionCreators/tokenActionCreators';
import { restoreCart } from './store/actionCreators/cartActionCreators';
import axios from 'axios';
import { Provider } from 'react-redux';

axios.interceptors.request.use((cfg) => {
    if (cfg.url.includes('login') || cfg.url.includes('registration')) {
        cfg.headers['Authorization'] = 'EcoFoods';
    } else {
        cfg.headers['Authorization'] = `EcoFoods ${store.getState().token.value}`;
    }
    return cfg;
});

axios.interceptors.response.use(null, (err) => {
    if (err.response.status === 403 && err.response.config && !err.response.config.__isRetryRequest) {
        store.dispatch(removeToken());
    }
    return Promise.reject(err);
});

const cart = localStorage.getItem('cart');
console.log(cart);
if (cart) {
    store.dispatch(restoreCart(JSON.parse(cart)));
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
