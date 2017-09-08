import React from 'react';
import 'babel-polyfill';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import './index.css';
import './assets/lib/animate.css';
import App from './App';
import rootReducer from './rootReducer';
import Page from './components/Page';
import Dashboard from './components/dashboard';
import LoginPage from './containers/loginPage';
import UserPage from './containers/userPage';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './rootSaga';

const routes =
  (<Route path={'/'} components={Page}>
    <IndexRedirect to="/app/dashboard/index" />
    <Route path={'app'} component={App}>
      <Route path={'dashboard/index'} component={Dashboard} />
      <Route path={'user/index'} component={UserPage} />
    </Route>
    <Route path={'login'} component={LoginPage} />
  </Route>);

// redux 注入操作
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
