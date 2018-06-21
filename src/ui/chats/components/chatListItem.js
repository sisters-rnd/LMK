import React, {Component} from 'react';

export default class ChatListItem extends Component {
  render() {
    const {id, image, name, lastMessageTime, lastMessageText} = this.props;

    return (
      <div className='chat-list__item'>
        <div className='chat-list-column chat-list-column--image'>
          <img src={image} alt={id} />
        </div>
        <div className='chat-list-column chat-list-column--body'>
          <div className='chat-list-body__name'>
            {name}
          </div>
          <div className='chat-list-body__text'>
            {lastMessageText}
          </div>
        </div>
        <div className='chat-list-column chat-list-column--info'>
          <div className='chat-list-body__date'>
            {new Date(lastMessageTime).toDateString()}
          </div>
        </div>
      </div>
    );
  }
}