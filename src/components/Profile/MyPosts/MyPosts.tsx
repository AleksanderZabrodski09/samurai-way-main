import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type MyPostsType = {
  title: string
  // posts:PostsType[]
}
type PostsType = {
  id: number,
  message: string,
  likeCount: number
}
let posts = [
  {id: 1, message: "How are you?", likeCount: 19},
  {id: 2, message: "It's my first post", likeCount: 15}
]
export const MyPosts = (props: MyPostsType) => {
  return (

    <div className={s.postsBlock}>
      <h2>{props.title}</h2>
      <div>
        <div><textarea>new post</textarea></div>
        <button>Send</button>
      </div>
      <div className={s.posts}>
        {posts.map(p=><Post key={p.id} message={p.message} likeCount={p.likeCount}/>)}

      </div>
    </div>
  )
}