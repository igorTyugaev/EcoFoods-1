import actions from '../actions/ordersActions';

const initialState = {
    loaded: true,
    value: [],
    error: null,
}

export default function orders(state = initialState, action) {
    switch(action.type) {
        case actions.GET_ORDERS_START:
            return {
                ...state,
                loaded: false,
                error: null,
            };
        case actions.GET_ORDERS_SUCCESS:
            return {
                ...state,
                loaded: true,
                error: null,
                value: actions.value,
            }
        case actions.GET_ORDERS_FAILURE:
            return {
                ...state,
                error: null,
                loaded: true,
            }
        default:
            return state;       
    }
}