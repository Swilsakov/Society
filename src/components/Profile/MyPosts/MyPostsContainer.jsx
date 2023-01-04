import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    let action = addPostActionCreator()
    props.store.dispatch(action)
  };

  let onChangePost = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  };

  return (
    <MyPosts 
      updateNewPostText={onChangePost}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;