import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Dialogs } from './Dialogs';
import { changeNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeNewMessageText: (newMesageText) => {
      dispatch(changeNewMessageTextActionCreator(newMesageText));
    },
    onSendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
