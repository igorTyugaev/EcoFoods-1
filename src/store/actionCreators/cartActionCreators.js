import axios from "axios";
import actions from "../actions/cartActions";
import { createDelivery } from './deliveryActionCreators';


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

export function cartStart() {
    return {
        type: actions.CART_START,
    }
}

export function cartSuccess() {
    return {
        type: actions.CART_SUCCESS,
    }
}

export function cartFailure(error) {
    return {
        type: actions.CART_FAILURE,
        value: error,
    }
}

export function formOrdersFromCart() {
    return (dispatch, getState, { url }) => {
        dispatch(cartStart());
        const state = getState();
        const cart = Object.values(state.cart.value);
        let orders = cart.reduce((acc, next) => {
            if (next.data.merchant.uuid) {
                if (!(next.data.merchant.uuid in acc)) {
                    acc[next.data.merchant.uuid] = [];                  
                }
                acc[next.data.merchant.uuid].push(next);
            }
            return acc;
        }, {});
        return Promise.all(Object.values(orders).map(products => {
            console.log(products);
            return axios
                .post(url + 'create_order/', {
                    product_uuid: products[0].uuid,
                    quantity: products[0].quantity,
                })
                .then(resp => Promise.all(products
                        .filter((p, i) => i !== 0)
                        .map(product => axios.patch(url + 'add_product_to_order/', {
                            order_uuid: resp.data.order_id,
                            product_uuid: product.uuid,
                            quantity: product.quantity,
                        }))
                    ).then(() => resp.data.order_id)
                )
            })
        )
        .then((values) => Promise.resolve(dispatch(cartSuccess())).then(() => Promise.resolve(values)))
        .catch(error => dispatch(cartFailure(error)));
    };
}

export function formOrdersFromCartWithDelivery() {
    return (dispatch, state, {url}) => {
        return dispatch(formOrdersFromCart())
            .then((values) => {
                console.log(values);
                values.map((order_id) => dispatch(createDelivery(order_id)))
            });
    };
}

export function restoreCart(cart) {
    return {
        type: actions.CART_RESTORE,
        value: cart,
    }
}