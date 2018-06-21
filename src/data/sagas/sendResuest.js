import axios from 'axios';
import {takeEvery} from 'redux-saga/effects';

function* sendRequest(url, params) {
  return axios.get(url, {params})
    .then();
}

export default function* sendRequestSaga() {
  yield takeEvery('getChats', getChats);
}