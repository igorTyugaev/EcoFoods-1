import axios from 'axios';
import { act } from 'react-dom/test-utils';
import actions from '../actions/deliveryActions';
import { restoreCart } from './cartActionCreators';

export function setDeliveryInfo(deliveryInfo) {
    return {
        type: actions.DELIVERY_SET_INFO,
        value: deliveryInfo,
    };
}


export function setDeliveryPayment(payment) {
    return {
        type: actions.DELIVERY_SET_PAYMENT,
        value: payment,
    };
}

export function createDelivery(orderId) {
    return (dispatch, getState, { url }) => {
        const state = getState();
        return axios.post(url + 'create_delivery/', {
            time_start: state.delivery.value.delivery.time_start,
            time_end: state.delivery.value.delivery.time_end,
            district: state.delivery.value.delivery.address,
            delivery_type: state.delivery.value.delivery.type,
            order: orderId,
        }).then(() => dispatch(restoreCart({}))).catch(error => console.log(error));
    };
}