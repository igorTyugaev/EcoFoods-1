import axios from 'axios';
import actions from '../actions/usersActions';

export function userInfoSuccess(userInfo) {
    userInfo.role = userInfo.is_merchant ? 'seller' : 'buyer';
    delete userInfo.is_merchant;
    console.log(userInfo);
    return {
        type: actions.USER_INFO_SUCCESS,
        value: userInfo,
    }
}

export function userInfoStart() {
    return {
        type: actions.USER_INFO_START,
    }
}

export function userInfoFailure(error) {
    return {
        type: actions.USER_INFO_FAILURE,
        value: error,
    }
}

export function getUserInfo() {
    return async (dispatch, getState, { url }) => {
        dispatch(userInfoStart());
        try {
            const resp = await axios.patch(url + 'update_user_info/', {});
            return dispatch(userInfoSuccess(resp.data));
        } catch (error) {
            return dispatch(userInfoFailure(error));
        }
    };
}

export function changeRole() {
    return {
        type: actions.USER_SELECT_ROLE,
    }
}

export function setUserInfo(userInfo) {
    return async (dispatch, getState, { url }) => {
        dispatch(userInfoStart());
        try {
            const resp = await axios.patch(url + 'update_user_info/', userInfo);
            return dispatch(userInfoSuccess(resp.data));
        } catch (error) {
            return dispatch(userInfoFailure(error));
        }
    };
}