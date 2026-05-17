
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST, ADD_NOTE_TO_WISHLIST_ITEM, LOAD_INITIAL_WISHLIST, WISHLIST_ERROR, WISHLIST_CLEAR_ERROR } from './actionTypes';

const initialState = {
  items: [],
  error: null,
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        return state;
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, wish: true }],
        error: null,
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        error: null,
      };

    case CLEAR_WISHLIST:
      return {
        ...state,
        items: [],
        error: null,
      };

    case ADD_NOTE_TO_WISHLIST_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, note: action.payload.note }
            : item
        ),
        error: null,
      };

    case LOAD_INITIAL_WISHLIST:
      return {
        ...state,
        items: action.payload,
        error: null,
      };

    case WISHLIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case WISHLIST_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
