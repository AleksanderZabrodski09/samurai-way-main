import s from './FriendItem.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {FriendsDateType} from '../../../redux/state';

export const FriendItem = (props: FriendsDateType) => {
  let path = '/friends/' + props.id;
  return (
    <div className={s.friend}>
      <div className={s.avatar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAlyXYTXH5ml78ntQfe1hphtYK0XWRmQcmw&usqp=CAU"
             alt=""/>
      </div>
      <NavLink to={path}>
        {props.name}
      </NavLink>
    </div>)
}