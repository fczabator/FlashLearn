import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/ducks';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from 'epics';

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = enhancer(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
