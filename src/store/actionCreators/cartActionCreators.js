import axios from "axios";
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


export function formOrders() {
    return (dispatch, state, { url }) => {
        const cart = Object.values(state.cart.value);
        const orders = cart.reduce((acc, next) => {
            if (next.data.merchant.uuid) {
                if (next.data.merchant.uuid in acc) {
                    acc[next.data.merchant.uuid].push(next);
                } else {
                    acc[next.data.merchant.uuid] = [];
                }
            } else {
                const alternativeUniqueIdInTheory = `${next.data.merchant.first_name} ${next.data.merchant.last_name}`;
                if (alternativeUniqueIdInTheory in acc) {
                    acc[alternativeUniqueIdInTheory].push(next);
                } else {
                    acc[alternativeUniqueIdInTheory] = [];
                }
            }
            return acc;
        }, {});
        const promises = orders.map(o => axios.post(url + 'create_order/', {
            
        }));
    };
}

export function restoreCart(cart) {
    return {
        type: actions.CART_RESTORE,
        value: cart,
    }
}