import * as actions from './auth.actions';

const INITIAL_STATE = {
    user: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.LOGIN_USER: {
            return { ...state, user: payload ? payload : null };
        }

        case actions.LOGOUT_USER: {
            return { ...state, user: null };
        }

        default: {
            return state;
        }
    }
}

export default authReducer;
