import {createStore, combineReducers, applyMiddleware} from 'redux';
import {chatsReducer} from './reducers/chatsReducer';
import createSagaMiddleware from 'redux-saga'
import chatsSaga from './sagas/getChats';

const reducers = combineReducers({chats: chatsReducer});
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(chatsSaga);