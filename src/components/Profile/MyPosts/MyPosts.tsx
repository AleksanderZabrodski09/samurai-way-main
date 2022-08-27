import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsType = {
  title: string
  posts:PostsType[]
  addPost:(postMessage:string)=>void
}


export const MyPosts = (props: MyPostsType) => {
  let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

  // const newPostElement = React.createRef<HTMLInputElement>();
  // let addPost = () => {
  //
  //   let text = newPostElement.current?.value;
  //   // (*we checked with .? optional chain*)
  //   alert(text);
  // }

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  const addPost = () => {
    debugger;
    let text = newPostElement.current?.value;
    if (newPostElement.current !== null) {
      props.addPost(text);
      useRef(text)
    }
  }

  return (
    <div className={s.myPosts}>
      <h2>{props.title}</h2>
      <div>
        <div>
          <textarea ref={newPostElement} placeholder={'new post'} autoFocus ></textarea>
        </div>
        <button className={s.button} onClick={addPost}>add post</button>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  )
}