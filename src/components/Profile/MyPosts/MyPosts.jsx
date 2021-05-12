import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />)

  return (
    <div className='postsBlock'>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
