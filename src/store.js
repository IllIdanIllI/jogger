import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authentication from './reducers/authenticationReducer';
import jogStore from './reducers/jogsReducer';
const rootReducer = combineReducers({
    authentication,
    jogStore,
});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
