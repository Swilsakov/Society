import React from 'react';
import classes from './post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3R5_VWeC2uvRylHxB5NX2s1nOMpbolqNgQ&usqp=CAU" alt=''/>
      <p>{props.message}</p>
      <span>Like {props.likesCount}</span>
    </div>
  )
}

export default Post;