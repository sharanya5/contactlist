import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, browserHistory, Router } from 'react-router';

ReactDOM.render((
<Router history={browserHistory}>
        <Route path="/" component={ App }/>
</Router>
), document.getElementById('root'))
