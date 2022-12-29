import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './dialogs.module.css';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  debugger;
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id} img={el.img} />);
  let messagesElements = state.messages.map(el => <Message key={el.id} message={el.message} />);
  let newMessageText = state.newMessageText;
  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  }

  let onNewMessageChange = (e) => {
    let newMessage = e.target.value;
    let action = updateNewMessageTextActionCreator(newMessage)
    props.store.dispatch(action);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div> 
        <div className='new-message'>
          <div>
            <textarea onChange={onNewMessageChange} ref={newMessageElement} value={newMessageText} placeholder="Enter your message"/>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;