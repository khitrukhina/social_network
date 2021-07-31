import { connect } from 'react-redux';

import { Posts } from './Posts';
import { addPostActionCreator } from '../../redux/profile-reducer';
import { changeNewPostTextActionCreator } from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNewPostText: (newPostText) => {
      dispatch(changeNewPostTextActionCreator(newPostText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
