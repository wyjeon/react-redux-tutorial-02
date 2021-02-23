import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'; // View Layer Binding

const store = createStore(reducers); // createStore()를 이용하여 스토어를 생성

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
