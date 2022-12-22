let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, title: 'Hi dears', likesCount: 12 },
        { id: 2, title: 'It`s Sunday', likesCount: 7 },
        { id: 3, title: 'Sad...', likesCount: 14 },
      ],
      newPostText: 'Hello World'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Bob', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU" },
        { id: 2, name: 'Alex', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU" },
        { id: 3, name: 'John', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU" },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Sup' },
        { id: 3, message: 'Yo' },
      ]
    },
    sidebar: [
      { id: 1, title: 'Profile', url: '/profile' },
      { id: 2, title: 'Messages', url: '/dialogs' },
      { id: 3, title: 'News', url: '/news' },
      { id: 5, title: 'Settings', url: '/settings' },
      { id: 4, title: 'Friends', url: '/friends' },
    ]
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer - pattern. button.addEventListener
  },

  _addPost() {
    let newPost = {
      id: 5, title: this._state.profilePage.newPostText, likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage(dialogMessage) {
  let newMessage = {
    id: 4, message: dialogMessage
  };

  this._state.dialogsPage.messages.push(newMessage);
  this._callSubscriber(this._state);
  },
  // отправка действий
  dispatch(action) {
    if(action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    }
  },

}

export default store;