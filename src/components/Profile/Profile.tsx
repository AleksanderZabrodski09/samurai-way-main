import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

// type ProfileType = {
//
// }
export const Profile = () => {
  return (
    <main className={s.main}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPihIju0BBCwq0HWOFF-aZo8vlz2FCOl7fg&usqp=CAU"
             alt="image"/>
      </div>
      <div>ava+desc.</div>
      <MyPosts title={'My posts'}/>
    </main>
  )
}