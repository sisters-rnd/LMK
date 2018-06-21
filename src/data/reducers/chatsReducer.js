import {SET_CHATS} from '../../constants';

const defaultState = {
  chatList: []
};

export const chatsReducer = (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case SET_CHATS: {
      const chats = action.data.chats;

      newState = Object.assign({}, state, {chatList: chats});

      break;
    }

    default: {
      newState = state;

      break;
    }
  }

  return newState;
};