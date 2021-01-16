import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let posts = [
    {id: 0, message: 'Hi, how are you?', likesCount: 15},
    {id: 1, message: 'My first post', likesCount: 20}
  ]

  let postsElement = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)


  return (
    <div className='postsBlock'>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts
