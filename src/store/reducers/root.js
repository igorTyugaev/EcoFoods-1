import { combineReducers } from 'redux';
import token from './token';
import orders from './orders';
import user from './user';
import initialState from '../initialState';

export default combineReducers({
    token: token,
    orders: orders,
    user: user,
});