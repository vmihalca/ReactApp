import reducer from './reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

const logger = createLogger();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

export default store;
