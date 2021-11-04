import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';

import rootReducer from './reducers/index';

import superagent from 'superagent';
import feathers from 'feathers-client';
import io from 'socket.io-client';
import rest from 'feathers-rest/client';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));

const host = 'http://localhost:3030';


//Configures REST calls to to feather server.
const restApp = feathers()
.configure(rest(host).superagent(superagent))
.configure(feathers.hooks());

const itemService = restApp.service('items');

//configures webSocket to feather server
export const socketApp = feathers()
.configure(feathers.socketio(io(host)))
.configure(feathers.hooks());

sagaMiddleware.run(mySaga, itemService);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

