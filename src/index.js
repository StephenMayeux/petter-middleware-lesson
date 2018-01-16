import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const middleware = [thunk];
if (process.env.ENVIRONMENT !== 'production') {
  middleware.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
