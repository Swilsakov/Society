import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      ],
      newMessageText: 'Hi'
    },
    sidebar: [
      { id: 1, title: 'Profile', url: '/profile' },
      { id: 2, title: 'Messages', url: '/dialogs' },
      { id: 3, title: 'News', url: '/news' },
      { id: 4, title: 'Users', url: '/users' },
      { id: 5, title: 'Friends', url: '/friends' },
      { id: 6, title: 'Settings', url: '/settings' },
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};


export default store;