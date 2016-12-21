import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddNew from './AddNew';
import './index.css';
import { Route, browserHistory, Router } from 'react-router';
import ContactList from './ContactList';

ReactDOM.render((
<Router history={browserHistory}>
        <Route path="/" component={ App }/>
</Router>
), document.getElementById('root'))
