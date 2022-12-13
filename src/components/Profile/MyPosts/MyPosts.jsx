import React from 'react';
import classes from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map( el => <Post key={el.id} message={el.title} likesCount={el.likesCount} /> )
  const newPostElement = React.createRef(); // VirtualDOM

  let addPost = () => {
    let text = newPostElement.current.value; // current - ссылается на нативный html element (getElementById) // let text = document.getElementById('text-post').value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div>
      <h3>My posts</h3>
      <div className='new-post'>
        <div>
          <textarea ref={ newPostElement }/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;