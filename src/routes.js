import React from 'react';
import App from './App';
import AddNew from './AddNew';
import { Route } from 'react-router';


export default () => {
return (
   <Route path="/" component={ App } />
   <Route path="/AddNew" component={ AddNew } />
);
};