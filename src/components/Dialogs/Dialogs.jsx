import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map( el => <Dialog key={el.id} name={el.name} id={el.id} img={el.img} />);
  let messagesElements = props.state.messages.map( el => <Message key={el.id} message={el.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
        {/* <Dialog name={dialogs[0].name} id={dialogs[0].id} /> */}
      </div>
      <div className={classes.messages}>
        { messagesElements }
        {/* <div className={classes.message}>sup</div> */}
        {/* <Message message={messages[0].message} /> */}
      </div>
    </div>
  )
};

export default Dialogs;