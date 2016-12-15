import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddNew from './AddNew';
import './index.css';
import { Route, browserHistory, Router } from 'react-router';

ReactDOM.render((
<Router history={browserHistory}>
        <Route path="/" component={ App }/>
        <Route path="/AddNew" component={ AddNew } />
</Router>
), document.getElementById('root'))
