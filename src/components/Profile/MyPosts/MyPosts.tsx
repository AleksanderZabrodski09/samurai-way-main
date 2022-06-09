import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type MyPostsType = {
  title: string
}
export const MyPosts = (props: MyPostsType) => {
  return (

    <div className={s.myPosts}>
      <h2>{props.title}</h2>
      <div>
        <textarea>new post</textarea>
        <button>Send</button>
      </div>
      <div className={s.posts}>
        <Post message={"How are you?"} likeCount={19}/>
        <Post message={"It's my first post"} likeCount={15}/>
      </div>
    </div>
  )
}