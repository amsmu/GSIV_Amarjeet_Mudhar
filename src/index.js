import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import movieApp from './reducers';
import App from './App';

const store = createStore(movieApp, devToolsEnhancer());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
