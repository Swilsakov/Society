import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

// data from state
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};
// function from component
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: newMessage => {
      let action = updateNewMessageTextActionCreator(newMessage)
      dispatch(action)
    },
    sendMessage: () => {
      let action = sendMessageActionCreator()
      dispatch(action)
    }
  }
};


let withAuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);

export default DialogsContainer;