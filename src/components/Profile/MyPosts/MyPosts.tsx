import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type MyPostsType = {
  title: string
}

let posts =[
  {message :"How are you?", likeCount: 19},
  {message :"It's my first post?", likeCount: 15}
]
export const MyPosts = (props: MyPostsType) => {

  return (
    <div className={s.myPosts}>
      <h2>{props.title}</h2>
      <div>
        <div>
          <textarea>new post</textarea>
        </div>
        <button className={s.button}>Send</button>
      </div>
      <div className={s.posts}>
        {posts.map(p=> <Post message={p.message} likeCount={p.likeCount}/>)}
      </div>
    </div>
  )
}