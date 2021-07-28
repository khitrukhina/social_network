import { connect } from 'react-redux';

import { Dialogs } from './Dialogs/Dialogs';
import { changeNewMessageTextActionCreator } from '../redux/dialogs-reducer';
import { sendMessageActionCreator } from '../redux/dialogs-reducer';

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

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
