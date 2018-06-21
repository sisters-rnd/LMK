import React, {Component} from 'react';
import ChatList from '../components/chatList';
import {connect} from 'react-redux';

export default class ChatListContainer extends Component {
  render() {
    const {chats} = this.props;

    return (
      <ChatList chats={chats} />
    )
  }

  componentDidMount() {
    this.props.getChats('http://192.168.1.19:8080/api/chats', {});
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChats: (url, params) => {
      dispatch({type: 'getChats', url, params});
    }
  };
};

const mapStateToProps = (state) => {
  return {
    chats: state.chats.chatList
  };
};

const ChatListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);

export {ChatListContainerConnected, ChatListContainer}