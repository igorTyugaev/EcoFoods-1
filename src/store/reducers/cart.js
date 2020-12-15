import actions from '../actions/cartActions';

const initialState = {
    loaded: true,
    value: {},
    error: null,
}

export default function cart(state = initialState, action) {
    let newValue = {
        ...state.value,
    };
    switch(action.type) {
        case actions.CART_ADD_ITEM:
            if (action.value.uuid in newValue) {
                newValue[action.value.uuid].quantity += action.value.quantity;
            } else {
                newValue[action.value.uuid] = action.value;
            }
            localStorage.setItem('cart', JSON.stringify(newValue));
            return {
                ...state,
                value: newValue,
            }
        case actions.CART_RESTORE:
            return {
                ...state,
                value: action.value,
            };
        case actions.CART_CHANGE_ITEM_COUNT:
            newValue[action.value.uuid].quantity = action.value.quantity;
            localStorage.setItem('cart', JSON.stringify(newValue));
            return {
                ...state,
                value: newValue,
            }
        case actions.CART_REMOVE_ITEM:
            delete newValue[action.value.uuid];
            localStorage.setItem('cart', JSON.stringify(newValue));
            return {
                ...state,
                value: newValue,
            }
        default:
            return state;       
    }
}