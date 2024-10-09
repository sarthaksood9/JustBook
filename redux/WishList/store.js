// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { wishlistReducer } from './reducer';
import { productReducer } from '../Product/reducer';
import { recentVisitReducer } from '../recentVisit/reducer';
import { thunk } from 'redux-thunk';
import userReducer from '../User/reducer';

// Combine the reducers (in case you have more reducers in the future)
const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  product: productReducer,
  recentVisit: recentVisitReducer,
  user:userReducer
});

// Create the Redux store
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;







