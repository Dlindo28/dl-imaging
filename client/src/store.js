import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const persistConfig = {
	key: "root",
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	persistedReducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
