import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, browserHistory, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddNew from './AddNew';

import reducer from './redux';

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store} key="provider">
            <Router history={browserHistory}>
                <Route path="/" component={ App }/>
                <Route path="/AddNew" component={ AddNew }/>
            </Router>
    </Provider>
), document.getElementById('root'));
