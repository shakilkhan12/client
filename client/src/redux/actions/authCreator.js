import axios from "axios";
import AuthTypes from "../constants/authTypes";

export const loginAction = (user) => {
    return async (dispatch) => {
        dispatch({type: AuthTypes.SET_LOADER});
        try {
            const {data: {token}} = await axios.post('/login', user);
            dispatch({type: AuthTypes.CLOSE_LOADER});
            localStorage.setItem('loginToken', token);
            dispatch({type: AuthTypes.SET_TOKEN, payload: token})
        } catch (error) {
            dispatch({type: AuthTypes.CLOSE_LOADER});
            dispatch({type: AuthTypes.SET_ERROR, payload: error.response.data.msg})
            console.log(error.response.data.msg)
        }
    }
}