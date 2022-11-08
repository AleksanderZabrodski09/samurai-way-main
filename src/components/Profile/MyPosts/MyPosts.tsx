import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';


type PropsType = {
  title: string
  posts: PostType[]
  addPost: () => void
  newTextPost: string
  updateNewTextPost: (text: string) => void
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

  // let newPostElement=React.createRef<HTMLTextAreaElement>()
  // let addPost = () => {
  //   props.addPost()
  //   // if (newPostElement.current) {
  //   //   props.addPost(newPostElement.current.value)
  //   // }
  // }

  let newPostElement = useRef<HTMLTextAreaElement>(null);
  //
  const addPost = () => {
    props.addPost()
    // props.updateNewTextPost('')

    // if (newPostElement.current) {
    //   props.addPost(newPostElement.current.value);
    // }
  }

  // const onChangeNewPost=(e:ChangeEvent<HTMLTextAreaElement>)=>{
  //   props.updateNewTextPost(e.currentTarget.value)
  // }
  const onChangeNewPost = () => {
    if (newPostElement.current) {
      const text = newPostElement.current.value
      props.updateNewTextPost(text)
    }

  }





  return (
    <div className={s.postsBlock}>
      <h2>{props.title}</h2>
      <div>
        <div>
          <textarea
            value={props.newTextPost}
            ref={newPostElement}
            placeholder={'new post'}
            onChange={onChangeNewPost}
            autoFocus>
          </textarea>
        </div>
        <button onClick={addPost}>Send</button>
      </div>
      <div className={s.posts}>
        {
          props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)
        }
      </div>
    </div>
  )
}