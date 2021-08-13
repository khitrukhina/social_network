import { connect } from 'react-redux';

import { Dialogs } from './Dialogs';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    },
  };
};

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Dialogs
);

export default DialogsContainer;
