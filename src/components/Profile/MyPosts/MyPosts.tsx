import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsType = {
  title: string
  posts: PostsType[]
  addPost: (postMessage: string) => void
}


export const MyPosts = (props: MyPostsType) => {
  let postElement = props.posts.map(p =>
    <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    // (*we checked with .? optional chain*)
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value)
    }
  }

  // let newPostElement = useRef<HTMLTextAreaElement>(null);
  // //
  // const addPost = () => {
  //   if (newPostElement.current) {
  //     props.addPost(newPostElement.current.value);
  //     newPostElement.current.value = '';
  //   }
  // }


  return (
    <div className={s.myPosts}>
      <h2>{props.title}</h2>
      <div>
        <div>
          <textarea ref={newPostElement} placeholder={'new post'} autoFocus>
          </textarea>

          <button className={s.button} onClick={addPost}>add post</button>

        </div>
        <div className={s.posts}>
          {postElement}
        </div>
      </div>
    </div>
  )
}