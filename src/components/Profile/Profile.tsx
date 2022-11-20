import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type PropsType = {
  profilePage:ProfilePageType
  addPost:()=>void
  updateTextPost: (text: string) => void
}




export const Profile = (props:PropsType) => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts title={'My posts'}
               posts={props.profilePage.posts}
               addPost={props.addPost}
               newTextPost={props.profilePage.newTextPost}
               updateNewTextPost={props.updateTextPost}
      />
    </main>
  )
}