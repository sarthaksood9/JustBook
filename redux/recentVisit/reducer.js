import { ADD_TO_RECENT, LOAD_INITIAL_RECENTS, RECENTS_ERROR, RECENTS_CLEAR_ERROR } from './actionTypes';

const initialState = {
  items: [],
  error: null,
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
        error: null,
      };

    case LOAD_INITIAL_RECENTS:
      return {
        ...state,
        items: action.payload,
        error: null,
      };

    case RECENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case RECENTS_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};