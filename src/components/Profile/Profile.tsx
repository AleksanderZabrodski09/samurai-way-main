import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

// type ProfileType = {
//
// }
export const Profile = () => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts title={'My posts'}/>
    </main>
  )
}