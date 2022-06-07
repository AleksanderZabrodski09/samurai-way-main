import React from 'react';
import s from './Profile.module.css';


export const Profile = () => {
  return (
    <main className="main">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPihIju0BBCwq0HWOFF-aZo8vlz2FCOl7fg&usqp=CAU"
             alt="image"/>
      </div>
      <div>ava+desc.</div>
      <div>my posts
        <div>new post</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </main>
  )
}