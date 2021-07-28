const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, text: "Hi! I've already started learning React!", likes: 0 },
  ],
  newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 10, text: state.newPostText, likes: 0 }],
        newPostText: '',
      };

    case CHANGE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };

    default:
      return state;
  }
};

export const changeNewPostTextActionCreator = (newPostText) => ({
  type: CHANGE_NEW_POST_TEXT,
  newPostText: newPostText,
});
export const addPostActionCreator = () => ({ type: ADD_POST });
