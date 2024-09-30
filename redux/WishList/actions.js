
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST, ADD_NOTE_TO_WISHLIST_ITEM, LOAD_INITIAL_WISHLIST } from './actionTypes';

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




export const loadInitialWish = () => {
  return async (dispatch) => {
    try {
      const storedItems = await AsyncStorage.getItem('wishList');
      const wishItems = storedItems ? JSON.parse(storedItems) : [];
      dispatch({ type: LOAD_INITIAL_WISHLIST, payload: wishItems });
    } catch (error) {
      console.error('Error loading recent items from storage', error);
    }
  };
};