import { addPostActionCreator, profileReducer } from './profile-reducer';

it('lenght of posts should be incremented', () => {
  //test data
  let action = addPostActionCreator('text');
  let state = {
    posts: [
      { id: 1, text: "Hi! I've already started learning React!", likes: 0 },
    ],
  };
  //action
  let newState = profileReducer(state, action);
  //expactation
  expect(newState.posts.length).toBe(2);
});
