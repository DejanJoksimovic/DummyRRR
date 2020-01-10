import React from 'react';
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import {Redirect, Route, Switch, BrowserRouter} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import { someId } from './reducers/SomeId';
import { dummyText } from './reducers/DummyText';

import { load } from './actions/Actions';

import { navigationRoutePath, Navigation } from './components/navigation/Navigation';
import { componentRoutePath, HooksComponent } from './components/component/Component';
import { anotherComponentRoutePath, AnotherComponent } from './components/anotherComponent/AnotherComponent';

const app = combineReducers({
    someId, dummyText
});

const store = createStore(
    app,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

store.dispatch(load());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path={navigationRoutePath} component={Navigation} />
                <Route path={'/app/(component|another)'} render={() => (
                    <Switch>
                        <Route exact path={componentRoutePath} component={HooksComponent} />
                        <Route exact path={anotherComponentRoutePath} component={AnotherComponent} />
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
