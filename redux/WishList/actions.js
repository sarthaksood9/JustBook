
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST, ADD_NOTE_TO_WISHLIST_ITEM } from './actionTypes';

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

export const addNoteToWishlistItem = (id, note) => ({
  type: ADD_NOTE_TO_WISHLIST_ITEM,
  payload: { id, note },
});