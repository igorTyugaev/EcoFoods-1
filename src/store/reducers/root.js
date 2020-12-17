import { combineReducers } from 'redux';
import token from './token';
import orders from './orders';
import user from './user';
import delivery from './delivery';
import initialState from '../initialState';
import cart from './cart';

export default combineReducers({
    token: token,
    orders: orders,
    user: user,
    cart: cart,
    delivery: delivery,
});