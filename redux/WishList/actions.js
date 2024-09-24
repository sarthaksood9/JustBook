// src/redux/wishlistActions.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST } from './actionTypes';

export const addItem = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

export const removeItem = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
});

export const clearWishlist = () => ({
  type: CLEAR_WISHLIST,
});