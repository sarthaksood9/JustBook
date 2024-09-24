import { SELECT } from "./actionTypes"


const initialState = {
    item: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }

}