import actions from "../actions/cartActions";


export function addItemToCart(item) {
    return {
        type: actions.CART_ADD_ITEM,
        value: item,
    }
}

export function removeItem(uuid) {
    return {
        type: actions.CART_REMOVE_ITEM,
        value: { uuid },
    }
}

export function changeItemCount(uuid, newCount) {
    return {
        type: actions.CART_CHANGE_ITEM_COUNT,
        value: {
            uuid,
            quantity: newCount,
        }
    }
}

export function restoreCart(cart) {
    return {
        type: actions.CART_RESTORE,
        value: cart,
    }
}