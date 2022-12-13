import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map( el => <Dialog key={el.id} name={el.name} id={el.id} img={el.img} />);
  let messagesElements = props.state.messages.map( el => <Message key={el.id} message={el.message} />);
  const newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
    newMessageElement.current.value = '';
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
      <div className='new-message'>
        <div>
          <textarea ref={ newMessageElement } />
        </div>
        <div>
          <button onClick={ addMessage }>Send Message</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;