import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer> 
    { (store) => {
        let onSendMessageClick = () => {
          let action = sendMessageActionCreator();
          store.dispatch(action);
        };
        let onNewMessageChange = (newMessage) => {
          let action = updateNewMessageTextActionCreator(newMessage)
          store.dispatch(action);
        };
        return (
          <Dialogs 
            updateNewMessageText={onNewMessageChange} 
            sendMessage={onSendMessageClick} 
            dialogsPage={store.getState().dialogsPage} />
        )
      }
    }
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;