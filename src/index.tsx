import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../src/ducks';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from 'epics';
// import {createMuiTheme} from 'material-ui/styles';
import {MuiThemeProvider} from 'material-ui/styles';
import muiTheme from '@app/theme/materialui';

const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = applyMiddleware(epicMiddleware);
const enhancer = compose(middleware, window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f);
const store = createStore(rootReducer, enhancer);

// const themeInstance = createMuiTheme(theme);

ReactDOM.render(
  <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
