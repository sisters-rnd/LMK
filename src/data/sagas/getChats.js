import axios from 'axios';
// import axios from '../../__mocks__/axios';
import {takeEvery, put, call} from 'redux-saga/effects';
import {setChats} from '../actionCreators/chatsActionCreators';

function fetchChats({url, params}) {
  return axios.get(url, {params})
    .then((response) => {
      return response;
    })
    .catch((errorMsg) => {
      return {isError: true, errorMsg};
    });
}

function* getChats(url, params) {
   const response = yield call(fetchChats, url, params);

  yield put(setChats(response.data));
}

export default function* getChatsSaga() {
  yield takeEvery('getChats', getChats);
}