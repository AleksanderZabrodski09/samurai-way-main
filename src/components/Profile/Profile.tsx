import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType, StateType} from '../../redux/state';



type ProfileType ={
  posts:PostsType[]
}

export const Profile = (props:ProfileType) => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts
        title={'My posts'}
        posts={props.posts}
      />
    </main>
  )
}