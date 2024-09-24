// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import { wishlistReducer } from './reducer';
import { productReducer } from '../Product/reducer';
import { recentVisitReducer } from '../recentVisit/reducer';

// Combine the reducers (in case you have more reducers in the future)
const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  product:productReducer,
  recentVisit:recentVisitReducer
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
