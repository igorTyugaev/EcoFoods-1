import actions from '../actions/deliveryActions';

const initialState = {
    loaded: true,
    value: {
        delivery: {
            type: '',
            address: '',
            time_start: '',
            time_end: '',
        },
        payment: {
            type: '',
        },
    },
    error: null,
}

export default function delivery(state = initialState, action) {
    switch(action.type) {
        case actions.DELIVERY_SET_INFO:
            return {
                ...state,
                value: {
                    ...state.value,
                    delivery: {
                        ...state.value.delivery,
                        ...action.value,
                    },
                },
            }
        case actions.DELIVERY_SET_PAYMENT:
            return {
                ...state,
                value: {
                    ...state.value,
                    payment: {
                        ...state.value.payment,
                        ...action.value,
                    },
                },
            }
        default:
            return state;       
    }
}