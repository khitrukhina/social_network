const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Alexey' },
    { id: 2, name: 'Alyona' },
  ],
  messages: [
    { id: 1, message: 'How r u today?' },
    { id: 2, message: "Hey, let's meet!" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action.message }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const sendMessageThunk = (message) => (dispatch) => {
  dispatch(sendMessageActionCreator(message));
};
