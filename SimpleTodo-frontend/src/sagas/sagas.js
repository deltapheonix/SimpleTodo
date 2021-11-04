import { takeEvery, fork, call, put } from 'redux-saga/effects';
import { createItem, updateItem, removeItem, findAllItems } from '../services/api';


// call feathers api -> result -> dispatch an action -> reduce action -> updates the state -> ui changes

function* callCreateItem(service, action) {
  const result = yield call(createItem, service, action.item);
  console.log(result);
  yield put({type: "CREATE_ITEM_DONE", result})
}

function* createItemSaga(service) {
  yield takeEvery('CREATE_ITEM', callCreateItem, service);
}

function* callUpdateItem(service, action) {
  const result = yield call(updateItem, service, action.id, action.newData);
  yield put({type: "UPDATE_ITEM_DONE", result});
}

function* updateItemSaga(service) {
  yield takeEvery('UPDATE_ITEM', callUpdateItem, service);
}

function* callRemoveItem(service, action) {
  const result = yield call(removeItem, service, action.id);
  yield put({type: "REMOVE_ITEM_DONE", result});
}

function* removeItemSaga(service) {
  yield takeEvery('REMOVE_ITEM', callRemoveItem, service);
}


function* callFindAllSaga(service, action) {
  const result = yield call(findAllItems, service);
  yield put({type: 'FIND_ALL_ITEMS_DONE', result})
}

function* findAllSaga(service) {
  yield takeEvery('FIND_ALL_ITEMS', callFindAllSaga, service);
}


export default function* root(service) {
  yield [
    fork(findAllSaga, service),
    fork(createItemSaga, service),
    fork(updateItemSaga, service),
    fork(removeItemSaga, service),
  ];
}
