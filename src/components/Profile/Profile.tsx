import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { PostsType} from '../../redux/state';


type PropsType = {
  posts: PostsType[]
  addPost:(postMessage:string)=>void
}

export const Profile = (props: PropsType) => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts
        title={'My posts'}
        posts={props.posts}
        addPost={props.addPost}
      />
    </main>
  )
}