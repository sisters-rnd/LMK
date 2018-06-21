import React, {Component} from 'react';
import ChatListItem from './chatListItem';

export default class ChatList extends Component {
  render() {
    const {chats} = this.props;

    return (
      <div className='chat_list'>
        {chats.map((chat, i) => {
          return (
            <ChatListItem
              key={chat.id}
              {...chat} />
          );
        })}
      </div>
    );
  }
}