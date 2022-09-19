import React from 'react';
import s from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';

type PropsType = {
  title: string
  posts:PostType[]
}
// type PostsType = {
//   id: number,
//   message: string,
//   likeCount: number
// }
// let posts = [
//   {id: 1, message: "How are you?", likeCount: 19},
//   {id: 2, message: "It's my first post", likeCount: 15}
// ]
export const MyPosts = (props: PropsType) => {
  return (

    <div className={s.postsBlock}>
      <h2>{props.title}</h2>
      <div>
        <div><textarea>new post</textarea></div>
        <button>Send</button>
      </div>
      <div className={s.posts}>
        {
          props.posts.map(p=><Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />)
        }

      </div>
    </div>
  )
}