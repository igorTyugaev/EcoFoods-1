import actions from '../actions/cartActions';

const initialState = {
    loaded: true,
    value: [],
    error: null,
}

export default function cart(state = initialState, action) {
    switch(action.type) {
        case actions.CART_ADD_ITEM:
            return {
                ...state,
                value: [
                    ...state.value,
                    action.value,
                ],
            }
        default:
            return state;       
    }
}