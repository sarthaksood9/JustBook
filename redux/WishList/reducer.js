
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST } from './actionTypes';

const initialState = {
  items: [],
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
