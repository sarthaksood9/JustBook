
import { ADD_TO_RECENT } from './actionTypes';


const initialState = {
    items: [],
};

export const recentVisitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_RECENT:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};
