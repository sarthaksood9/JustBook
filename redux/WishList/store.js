// src/redux/store.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { wishlistReducer } from './reducer';
import { productReducer } from '../Product/reducer';
import { recentVisitReducer } from '../recentVisit/reducer';
import { thunk } from 'redux-thunk';
import userReducer from '../User/reducer';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  product: productReducer,
  recentVisit: recentVisitReducer,
  user: userReducer
});

// Enable Redux DevTools for debugging in development
const composeEnhancers =
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;







