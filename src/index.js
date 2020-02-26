import React from 'react';
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import { todo } from './reducers/Todo';
import { shoppingList } from './reducers/ShoppingList';

import { navigationRoutePath, Navigation } from './components/navigation/Navigation';
import { todoRoutePath, Todo } from './components/todo/Todo';
import { shoppingListRoutePath, ShoppingList } from './components/shoppingList/ShoppingList';
import { Typography } from '@material-ui/core';

const app = combineReducers({
    todo, shoppingList
});

const store = createStore(
    app,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Typography variant="h4" component="h1" gutterBottom>
                Demo App
            </Typography>
            <Switch>
                <Route exact path={navigationRoutePath} component={Navigation} />
                <Route path={'/app/(todo|shoppingList)'} render={() => (
                    <Switch>
                        <Route exact path={todoRoutePath} component={Todo} />
                        <Route exact path={shoppingListRoutePath} component={ShoppingList} />
                    </Switch>
                )} />
                <Route path="/" render={() => (
                    <Redirect to={navigationRoutePath} />
                )} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
