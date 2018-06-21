import React, {Component} from 'react';
import './app.css';
import {Provider} from 'react-redux';
import store from './data/store';
import {ChatListContainerConnected} from './ui/chats/containers/chatListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ChatListContainerConnected />
        </div>
      </Provider>
    );
  }
}

export default App;
