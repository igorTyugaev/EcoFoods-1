import axios from 'axios';
import actions from '../actions/ordersActions';

export function getOrdersSuccess(data) {
    return {
        type: actions.GET_ORDERS_SUCCESS,
        value: data,
    }
}

export function getOrdersFailure(error) {
    return {
        type: actions.GET_ORDERS_FAILURE,
        value: error,
    }
}

export function getOrdersStart() {
    return {
        type: actions.GET_ORDERS_START,
    }
}

export function getOrders() {
    return (dispatch, getState, { url }) => {
        dispatch(getOrdersStart());
        axios
            .get(url + 'get_orders/')
            .then(resp => dispatch(getOrdersSuccess(resp.data)))
            .catch(err => dispatch(getOrdersFailure(err)));
    };
}