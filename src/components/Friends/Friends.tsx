import React from 'react';
import s from './Friends.module.css';
import {FriendsNavType} from '../../redux/state';


export const Friends = (props:FriendsNavType) => {
  return (
    <main className={s.main}>
      Friends
    </main>
  )
}