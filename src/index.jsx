import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';

import store from './reducers/store.js';

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app-root'));
