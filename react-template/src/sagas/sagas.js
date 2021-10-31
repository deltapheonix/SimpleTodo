import { takeEvery, fork, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { findAllItems, removeItem } from '../actions/actionCreators';
import { type } from 'os';

// call feathers api -> result -> dispatch an action -> reduce action -> updates the state -> ui changes

function* callCreateItem(service, action) {
  const result = yield call(createItem, service, action.item);
}

function* createItemSaga(service) {
  yield takeEvery('CREATE_ITEM', callCreateItem, service);
}

function* callUpdateItem(service, action) {
  const result = yield call(updateItem, service, action.id, action.newData);
}

function* updateItemSaga(service) {
  yield takeEvery('UPDATE_ITEM', callUpdateItem, service);
}

function* callRemoveItem(service, action) {
  const result = yield call(removeItem, service, action.id);
}

function* removeItemSaga(service) {
  yield takeEvery('REMOVE_ITEM', callRemoveItem, service);
}


function* callFindAllItems(service, action) {
  const result = yield call(findAllItems, service);
}

function* findAllSaga(service) {
  yield takeEvery('FIND_ALL_ITEMS', callFindAllItems, service);
}


/*
function something() {
  // call api
}

function* callSomething(action) {
  const result = yield call(something, action.param);
  yield put({ type: '', result });
}

function* somethingSaga() {
  yield takeEvery('MY_ACTION', callSomething);
}
*/

export default function* root() {
  yield [
    fork(findAllSaga, service),
    fork(createItemSaga, service),
    fork(updatedItemSaga, service),
    fork(removeItemSaga, service),
  ];
}
