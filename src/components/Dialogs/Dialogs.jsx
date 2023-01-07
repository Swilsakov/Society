import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id} img={el.img} />);
  let messagesElements = state.messages.map(el => <Message key={el.id} message={el.message} />);
  let newMessageText = state.newMessageText;
  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let newMessage = e.target.value;
    props.updateNewMessageText(newMessage);
  };

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