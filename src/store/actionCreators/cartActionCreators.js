import actions from "../actions/cartActions";


export function addItemToCart(item) {
    return {
        type: actions.CART_ADD_ITEM,
        value: item,
    }
}