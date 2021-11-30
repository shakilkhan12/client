import jwt_decode from 'jwt-decode';
import AuthTypes from "../constants/authTypes";

const initState = {
    loader: false,
    error: '',
    token: '',
    user: ''
}
const verifyToken = (token) => {
	const decodeToken = jwt_decode(token);
	const expiresIn = new Date(decodeToken.exp * 1000);
	if (new Date() > expiresIn) {
		localStorage.removeItem('loginToken');
		return null;
	} else {
		return decodeToken;
	}
};
const token = localStorage.getItem('loginToken');
if (token) {
	const decoded = verifyToken(token);
	if (decoded) {
		initState.token = token;
		const { user } = decoded;
		initState.user = user;
	}
}
const loginReducer = (state = initState, action) => {
    const {type, payload} = action;
    console.log('your payload: ', payload)
    switch(type) {
        case AuthTypes.SET_LOADER:
            return {...state, loader: true}
        case AuthTypes.CLOSE_LOADER: 
        return {...state, loader: false}
        case AuthTypes.SET_TOKEN:
            const decoded = verifyToken(payload);
            const { user } = decoded;
            return {
                ...state,
                token: payload,
                user
            }
        case AuthTypes.REMOVE_TOKEN: 
        localStorage.removeItem('loginToken');
        return {
            ...state,
            token: '',
            user: ''
        }
        case AuthTypes.SET_ERROR:
            console.log('error run')
            return {
                ...state,
                error: payload
            }
        case AuthTypes.REMOVE_ERROR:
            return {
                ...state,
                error: ''
            }
        default: 
        return state;
        
    }
}
export default loginReducer;