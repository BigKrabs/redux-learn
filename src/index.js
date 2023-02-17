import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux"
import { forbiddenWordsMiddleware } from './store/middleware';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './store/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk, forbiddenWordsMiddleware, saga), compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
