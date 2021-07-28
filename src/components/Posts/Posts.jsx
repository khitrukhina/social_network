import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import classes from './Posts.module.css';
import avatar from './ava.png';

export const Posts = (props) => {
  return (
    <div className="m-4">
      <div className={classes.posts__title}>MY POSTS</div>
      <PostsInput
        state={props.profilePage}
        addPost={props.addPost}
        changeNewPostText={props.changeNewPostText}
      />
      {props.profilePage.posts.map((post, index) => {
        return <Post text={post.text} id={post.id} key={index} />;
      })}
    </div>
  );
};

const PostsInput = (props) => {
  let newPost = React.createRef();

  function addPost() {
    props.addPost();
  }

  function changeNewPostText() {
    let newPostText = newPost.current.value;
    props.changeNewPostText(newPostText);
  }

  return (
    <form className="d-flex">
      <div className={classes.posts__input}>
        <input
          type="text"
          className="form-control"
          placeholder="Your text here..."
          ref={newPost}
          onChange={changeNewPostText}
          value={props.state.newPostText}
        />
      </div>
      <button type="button" className="btn btn-success" onClick={addPost}>
        Post
      </button>
    </form>
  );
};

const Post = (props) => {
  let [likes, setLikes] = useState(0);

  const handleHeartClick = () => {
    setLikes((likes += 1));
  };

  return (
    <div className={classes.postWrapper}>
      <div>
        <img src={avatar} className={classes.avatar} alt="avatar"></img>
      </div>
      <div className={classes.post__text}>
        {props.text}
        <div>
          <FontAwesomeIcon icon={faHeart} onClick={handleHeartClick} />
          {likes > 0 ? (
            <span className={classes.post__likes}>{likes}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
