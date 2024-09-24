// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import { wishlistReducer } from './reducer';
import { productReducer } from '../Product/reducer';

// Combine the reducers (in case you have more reducers in the future)
const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  product:productReducer
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
