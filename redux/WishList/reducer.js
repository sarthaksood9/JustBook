
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CLEAR_WISHLIST, ADD_NOTE_TO_WISHLIST_ITEM, LOAD_INITIAL_WISHLIST } from './actionTypes';

const saveRecentItemsToStorage = async (item) => {
  await AsyncStorage.setItem('wishList', JSON.stringify(item));
};

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

      const updatedItems = [...state.items, action.payload];
      saveRecentItemsToStorage(updatedItems);

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

    case ADD_NOTE_TO_WISHLIST_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, note: action.payload.note }
            : item
        ),
      };
    case LOAD_INITIAL_WISHLIST:

      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
