import React from 'react';
import classes from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(el => <Post message={el.title} likesCount={el.likesCount} />)

  let newPostElement = React.createRef(); // VirtualDOM

  let addPost = () => {
    // let text = document.getElementById('text-post').value;
    let text = newPostElement.current.value // current - ссылается на нативный html element
    alert(text)
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          {/* <textarea id="text-post"></textarea> */}
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;