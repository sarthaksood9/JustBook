import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_TO_RECENT, LOAD_INITIAL_RECENTS } from "./actionTypes";



export const addToResent = (item) => {
  const itemWithDate = {
    ...item,
    dateAdded: new Date().toISOString(),
    // dateAdded: "2024-09-20T21:32:00.497Z",
    // dateAdded: "2024-09-24T21:33:40.564Z",
  };

  return {
    type: ADD_TO_RECENT,
    payload: itemWithDate,
  };
};


export const loadInitialRecents = () => {
  return async (dispatch) => {
    try {
      const storedItems = await AsyncStorage.getItem('recentItems');
      const recentItems = storedItems ? JSON.parse(storedItems) : [];
      dispatch({ type: LOAD_INITIAL_RECENTS, payload: recentItems });
    } catch (error) {
      error('Error loading recent items from storage', error);
    }
  };
};
