let rerenderEntireTree = () => {
  console.log('State was changed');
}

let state = {
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
      {id: 1, name: 'Bob', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU"},
      {id: 2, name: 'Alex', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU"},
      {id: 3, name: 'John', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU"},
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'Sup'},
      {id: 3, message: 'Yo'},
    ]
  },
  sidebar: [
    {id: 1, title: 'Profile', url: '/profile'},
    {id: 2, title: 'Messages', url: '/dialogs'},
    {id: 3, title: 'News', url: '/news'},
    {id: 5, title: 'Settings', url: '/settings'},
    {id: 4, title: 'Friends', url: '/friends'},
  ]
}

export const addPost = () => {
  let newPost = {
    id: 5, title: state.profilePage.newPostText, likesCount: 99
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const addMessage = (dialogMessage) => {
  let newMessage = {
    id: 4, message: dialogMessage
  };

  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // observer - pattern. button.addEventListener
}
export default state;