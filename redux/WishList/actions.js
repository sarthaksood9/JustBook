
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST, ADD_NOTE_TO_WISHLIST_ITEM, LOAD_INITIAL_WISHLIST, WISHLIST_ERROR, WISHLIST_CLEAR_ERROR } from './actionTypes';

// Synchronous actions
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

export const setError = (error) => ({
  type: WISHLIST_ERROR,
  payload: error,
});

export const clearError = () => ({
  type: WISHLIST_CLEAR_ERROR,
});

// Async thunk actions - these handle side effects (AsyncStorage)
export const addItemAsync = (item) => {
  return async (dispatch, getState) => {
    try {
      // Dispatch sync action first
      dispatch(addItem(item));

      // Then persist to AsyncStorage
      const { wishlist } = getState();
      await AsyncStorage.setItem('wishList', JSON.stringify(wishlist.items));
      dispatch(clearError());
    } catch (error) {
      console.error('Error saving wishlist item:', error);
      dispatch(setError(error.message || 'Failed to save wishlist item'));
    }
  };
};

export const removeItemAsync = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(removeItem(id));
      const { wishlist } = getState();
      await AsyncStorage.setItem('wishList', JSON.stringify(wishlist.items));
      dispatch(clearError());
    } catch (error) {
      console.error('Error removing wishlist item:', error);
      dispatch(setError(error.message || 'Failed to remove wishlist item'));
    }
  };
};

export const clearWishlistAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(clearWishlist());
      await AsyncStorage.setItem('wishList', JSON.stringify([]));
      dispatch(clearError());
    } catch (error) {
      console.error('Error clearing wishlist:', error);
      dispatch(setError(error.message || 'Failed to clear wishlist'));
    }
  };
};

export const loadInitialWish = () => {
  return async (dispatch) => {
    try {
      const storedItems = await AsyncStorage.getItem('wishList');
      const wishItems = storedItems ? JSON.parse(storedItems) : [];
      dispatch({ type: LOAD_INITIAL_WISHLIST, payload: wishItems });
      dispatch(clearError());
    } catch (error) {
      console.error('Error loading wishlist from storage:', error);
      dispatch(setError(error.message || 'Failed to load wishlist'));
    }
  };
};