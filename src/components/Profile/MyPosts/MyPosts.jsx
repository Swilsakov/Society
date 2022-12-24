import React from 'react';
import classes from './myPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  debugger;
  let postsElements = props.posts.map(el => <Post key={el.id} message={el.title} likesCount={el.likesCount} />)
  let newPostElement = React.createRef(); // VirtualDOM

  let addPost = () => {
    // props.addPost();
    let action = addPostActionCreator()
    props.dispatch(action)
  }

  let onChangePost = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div className='new-post'>
        <div>
          <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;