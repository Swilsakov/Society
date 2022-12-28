let initialState = [
  { id: 1, title: 'Profile', url: '/profile' },
  { id: 2, title: 'Messages', url: '/dialogs' },
  { id: 3, title: 'News', url: '/news' },
  { id: 5, title: 'Settings', url: '/settings' },
  { id: 4, title: 'Friends', url: '/friends' },
]

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;