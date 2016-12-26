import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, browserHistory, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux';

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store} key="provider">
            <Router history={browserHistory}>
                <Route path="/" component={ App }/>
            </Router>
    </Provider>
), document.getElementById('root'));
