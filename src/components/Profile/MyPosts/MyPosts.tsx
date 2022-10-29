import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';

type PropsType = {
  title: string
  posts: PostType[]
  addPost:(messagePost:string)=>void
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
  let newPostElement = useRef<HTMLTextAreaElement>(null)

  let addPost = () => {
    let text = newPostElement.current?.value
    props.addPost
    alert(text)
  }
  // let addPost = () => {
  //   let text = newPostElement.current?.value
  //   if(newPostElement.current?.value!==null){
  //     props.addPost(text)
  //   }
  //   useRef(text)
  // }


  return (
    <div className={s.postsBlock}>
      <h2>{props.title}</h2>
      <div>
        <div>
          <textarea
          ref={newPostElement}
          placeholder={'new post'} autoFocus>
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