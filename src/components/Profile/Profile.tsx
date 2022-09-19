import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';

type PropsType = {
  postsDate:PostType[]
}




export const Profile = (props:PropsType) => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts title={'My posts'} posts={props.postsDate}/>
    </main>
  )
}