import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './redux/index'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom'

const store = createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

