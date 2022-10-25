import React from 'react';
import {FriendsDateType} from '../../redux/state';
import {FriendItem} from './FriendItem/FriendItem';
import s from './Friends.module.css';



type PropsType={
  friends: FriendsDateType[]
}

export const Friends = (props:PropsType) => {
  return (
    <div className={s.friendsRow}>
      {props.friends.map(f => <FriendItem key={f.id} id={f.id} name={f.name}/>)}
    </div>
  );
};



