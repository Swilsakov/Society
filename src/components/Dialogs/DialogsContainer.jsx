import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  }

  let onNewMessageChange = (newMessage) => {
    let action = updateNewMessageTextActionCreator(newMessage)
    props.store.dispatch(action);
  }

  return (
    <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
  )
};

export default DialogsContainer;