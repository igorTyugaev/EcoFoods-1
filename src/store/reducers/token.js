import actions from '../actions/tokenActions';
import tokenStorage from '../../utils/token';

const initialState = {
    value: tokenStorage.get(),
    loaded: true,
}

export default function token(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case actions.AUTH_START: 
            return {
                ...state,
                loaded: false,
            }
        case actions.SET_TOKEN:
            return {
                ...state,
                loaded: true,
                value: action.value,
            };
        case actions.REMOVE_TOKEN:
            return {
                ...state,
                loaded: true,
                value: action.value,
            };
        default:
            return state;
    }
}