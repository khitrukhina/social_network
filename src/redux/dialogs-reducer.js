const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: 'Alexey' },
    { id: 2, name: 'Alyona' },
  ],
  messages: [
    { id: 1, message: 'How r u today?' },
    { id: 2, message: "Hey, let's meet!" },
  ],
  newMessageText: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: state.newMessageText }],
        newMessageText: '',
      };

    case CHANGE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      };

    default:
      return state;
  }
};

export const changeNewMessageTextActionCreator = (newMessageText) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  newMessageText: newMessageText,
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
