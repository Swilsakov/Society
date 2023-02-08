let initialState = [
  { id: 1, title: 'Profile', url: '/profile/1' },
  { id: 2, title: 'Messages', url: '/dialogs' },
  { id: 3, title: 'News', url: '/news' },
  { id: 4, title: 'Users', url: '/users' },
  { id: 5, title: 'Friends', url: '/friends' },
  { id: 6, title: 'Settings', url: '/settings' },
]

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;