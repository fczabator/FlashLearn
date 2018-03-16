import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
// import {createStore} from 'redux';
import rootReducer from '../src/ducks';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from 'epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = applyMiddleware(epicMiddleware);
const enhancer = compose(middleware, window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
