import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type PostsType={
  id:number
  message :string
  likeCount: number
}

let posts =[
  {id:1, message :"How are you?", likeCount: 19},
  {id:2, message :"It's my first post?", likeCount: 15}
]
export const Profile = () => {
  return (
    <main className={s.main}>
      <ProfileInfo/>
      <MyPosts
        title={'My posts'}
        posts={posts}
      />
    </main>
  )
}