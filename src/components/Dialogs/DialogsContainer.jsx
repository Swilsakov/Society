import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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



export default compose(
  connect(mapStateToProps, mapDispatchToProps), // 3 step
  withAuthRedirect // 2 step
)(Dialogs) // 1 step


// let withAuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);
// export default DialogsContainer;