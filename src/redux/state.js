import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

//example of working without redux store

export let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Alyona' },
      ],
      messages: [
        { id: 1, message: 'How r u today?' },
        { id: 2, message: "Hey, let's meet!" },
      ],
      newMessageText: '',
    },

    profilePage: {
      posts: [
        { id: 1, text: "Hi! I've already started learning React!", likes: 0 },
      ],
      newPostText: '',
    },

    sidebarPage: {
      friends: [
        { id: 1, name: 'Alyona Fetisova' },
        { id: 2, name: 'Alexey Liesniak' },
        { id: 3, name: 'Natalia Tkachova' },
        { id: 4, name: 'Liudmila Golub' },
      ],
    },
  },

  _callSubscriber() {
    console.log('State has been changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
