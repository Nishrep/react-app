import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://vk.vkfaces.com/824504/v824504979/15d4b0/ra2NyUullpg.jpg'/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
