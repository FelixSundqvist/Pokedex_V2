import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import fetchReducer from './store/reducers/fetchReducer';
import teamReducer from './store/reducers/teamReducer';
import mySaga from './store/sagas/sagas';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    fetchReducer,
    teamReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
