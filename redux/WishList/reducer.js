// src/redux/wishlistReducer.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST } from './actionTypes';

// Initial state for the wishlist
const initialState = {
  items: [],
};

// Wishlist reducer
export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case CLEAR_WISHLIST:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
