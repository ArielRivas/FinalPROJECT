import { checkUser } from "../../helpers/auth.helper";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";


export const loginUser = (id, email, redirectTo) => dispatch => {
    const user = checkUser(id, email);

    const action = {
        type: LOGIN_USER,
        payload: user
    }

    dispatch(action);

    if (user) {
        redirectTo();
    }
}

export const logoutUser = () => dispatch => {
    const action = {
        type: LOGOUT_USER
    }

    dispatch(action);
}