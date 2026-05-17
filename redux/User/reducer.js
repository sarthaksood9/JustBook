import { CLEAR_USER, SET_USER } from "./actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default userReducer;