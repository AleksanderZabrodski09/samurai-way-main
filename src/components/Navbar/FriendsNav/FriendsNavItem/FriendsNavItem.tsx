import React from 'react';
// import s from '../FriendsNav.module.css';
import {NavLink} from 'react-router-dom';
import s from './FriendsNavItem.module.css';
import {FriendsNavItemType} from '../../../../redux/state';

// type FriendsNavItemType={
//   id:number
//   name:string
// }

export const FriendsNavItem = (props:FriendsNavItemType) => {
  let path='/friends/' + props.id
  return (
    <div>
      <div className={s.friend}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAlyXYTXH5ml78ntQfe1hphtYK0XWRmQcmw&usqp=CAU"
          alt=""/>
      </div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

