import actions from '../actions/tokenActions';
import tokenStorage from '../../utils/token';
import axios from 'axios';

export function start() {
    return {
        type: actions.AUTH_START,
    }
}

export function register(email, password) {
    return async (dispatch, getStore, {url}) => {
        dispatch(start());
        try {
            const resp = await axios.post(url + 'registration/', {
                    email: email,
                    password: password,
                });
            dispatch(setToken(resp.data.token));
        } catch (error) {
            return dispatch(removeToken());
        }
    };
}

export function login(email, password) {
    return async (dispatch, getStore, {url}) => {
        dispatch(start());
        try {
            const resp = await axios.post(url + 'login/', {
                    email: email,
                    password: password,
                });
            console.log(resp.data);
            dispatch(setToken(resp.data.token));
        } catch (error) {
            return dispatch(removeToken());
        }
    };
}

export function setToken(token) {
    console.log(token);
    tokenStorage.set(token);
    return {
        type: actions.SET_TOKEN,
        value: token,
    }
}

export function removeToken() {
    tokenStorage.remove();
    localStorage.removeItem('cart');
    return {
        type: actions.REMOVE_TOKEN,
        value: '',
    }
}