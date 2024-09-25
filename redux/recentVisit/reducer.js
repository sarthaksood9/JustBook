
import { ADD_TO_RECENT } from './actionTypes';


const initialState = {
    items: [],
};

export const recentVisitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_RECENT:
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                return state;
            }

            return {
                ...state,
                items: [...state.items, action.payload],
            };

        default:
            return state;
    }
};
