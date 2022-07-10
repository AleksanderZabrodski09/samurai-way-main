import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import { PostsType} from '../../../redux/state';

type MyPostsType = {
  title: string
  posts:PostsType[]
}


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
        {props.posts.map(p=> <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}
      </div>
    </div>
  )
}