const chats = [{
  image: 'url',
  name: 'Moran',
  lastMessageTime: 1529484255984,
  lastMessageText: 'heyush'
}, {
  image: 'url',
  name: 'Pazit',
  lastMessageTime: 1529484255984,
  lastMessageText: 'heyush'
}, {
  image: 'url',
  name: 'Daniela',
  lastMessageTime: 1529484255984,
  lastMessageText: 'heyush'
}];

export default {
  get: () => {
    return new Promise((resolve, reject) => {
        resolve({data: {chats}});
      }
    )
  }
}