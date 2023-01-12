const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case SEND_MESSAGE: 
      let newMessage = {id: 4, message: state.newMessageText};
      stateCopy = {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      };
      return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT: {
      stateCopy = {
        ...state,
        newMessageText: action.newText
      };
      return stateCopy;
    }
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;