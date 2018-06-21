import {SET_CHATS} from '../../constants';

export const setChats = (chats) => {
  return {
    type: SET_CHATS,
    data: {chats}
  }
};