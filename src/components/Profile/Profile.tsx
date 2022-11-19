import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsArrayType, PostsType} from '../../redux/state';


type PropsType = {
  profilePage: PostsArrayType
  addPost:()=>void
  upDateNewPostText:(newText:string)=>void
}

export const Profile = (props: PropsType) => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts
        title={'My posts'}
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        upDateNewPostText={props.upDateNewPostText}
        // message={props.message}
        // newTextChange={props.newTextChange}
      />
    </main>
  )
}