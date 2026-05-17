import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_TO_RECENT, LOAD_INITIAL_RECENTS, RECENTS_ERROR, RECENTS_CLEAR_ERROR } from "./actionTypes";

export const addToRecent = (item) => {
  const itemWithDate = {
    ...item,
    dateAdded: new Date().toISOString(),
  };

  return {
    type: ADD_TO_RECENT,
    payload: itemWithDate,
  };
};

export const addToRecentAsync = (item) => {
  return async (dispatch, getState) => {
    try {
      dispatch(addToRecent(item));
      const state = getState();
      const recentItems = state.recentVisit.items;
      await AsyncStorage.setItem('recentItems', JSON.stringify(recentItems));
      dispatch({ type: RECENTS_CLEAR_ERROR });
    } catch (error) {
      console.error('Error adding item to recent visits', error);
      dispatch({ type: RECENTS_ERROR, payload: error.message || 'Failed to add to recent visits' });
    }
  };
};

export const loadInitialRecents = () => {
  return async (dispatch) => {
    try {
      const storedItems = await AsyncStorage.getItem('recentItems');
      const recentItems = storedItems ? JSON.parse(storedItems) : [];
      dispatch({ type: LOAD_INITIAL_RECENTS, payload: recentItems });
      dispatch({ type: RECENTS_CLEAR_ERROR });
    } catch (error) {
      console.error('Error loading recent items from storage', error);
      dispatch({ type: RECENTS_ERROR, payload: 'Failed to load recent visits' });
    }
  };
};
