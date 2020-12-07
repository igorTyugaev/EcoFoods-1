import actions from '../actions/usersActions';

const initialState = {
    loaded: true,
    error: null,
    value: {
        uuid: '',
        role: '',
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
    },
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case actions.USER_INFO_SUCCESS:
            return {
                ...state,
                loaded: true,
                error: null,
                value: action.value,
            };
        case actions.USER_INFO_START:
            return {
                ...state,
                error: null,
                loaded: false,
            }
        case actions.USER_INFO_FAILURE:
            return {
                ...state,
                loaded: true,
                error: action.value,
            }
        case actions.USER_SELECT_ROLE: 
            return {
                ...state,
                error: null,
                value: {
                    ...state.value,
                    role: '',
                },
            }
        default:
            return state;       
    }
}