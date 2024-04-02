import React from 'react';
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import { todo } from './reducers/Todo';
import { shoppingList } from './reducers/ShoppingList';

import { navigationRoutePath, Navigation } from './components/navigation/Navigation';
import { todoRoutePath, Todo } from './components/todo/Todo';
import { shoppingListRoutePath, ShoppingList } from './components/shoppingList/ShoppingList';
import { Typography } from '@material-ui/core';

import MemoParrentExample from './components/MemoParrentExample'
import CallbackExample from './components/CallbackExample'
import SeparateContextsExample from './components/SeparateContextsExample'

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
            <Routes>
                <Route exact path={navigationRoutePath} Component={Navigation} />
                <Route exact path="/MemoExample" Component={MemoParrentExample} />
                <Route exact path="/CallbackExample" Component={CallbackExample} />
                <Route exact path="/SeparateContextsExample" Component={SeparateContextsExample} />
                <Route exact path={todoRoutePath} Component={Todo} />
                <Route exact path={shoppingListRoutePath} Component={ShoppingList} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
