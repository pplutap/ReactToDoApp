import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Login from 'Login';
import ToDoApp from 'ToDoApp';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLogged = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={ToDoApp} onEnter={requireLogin}/>
            <IndexRoute component={Login} onEnter={redirectIfLogged}/>
        </Route>
     </Router>
);