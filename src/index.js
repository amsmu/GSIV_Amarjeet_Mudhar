import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import movieSearch from './reducers';
import rootSaga from './sagas';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import './index.css'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(movieSearch, compose(applyMiddleware(sagaMiddleware), devToolsEnhancer()));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
