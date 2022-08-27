import React from 'react';
import s from './FriendsNav.module.css';
import {FriendsNavItem} from './FriendsNavItem/FriendsNavItem';
import {FriendsNavType} from '../../../redux/state'



// export type FriendsNavType={
//  friends:FriendsNavItemType[]
//
// }
export  const FriendsNav = (props:FriendsNavType) => {
  return (
    <div className={s.friendRow}>
      {props.friends.map((f)=><FriendsNavItem
        key={f.id}
        id={f.id}
        name={f.name}
      />)
      }

    </div>
  );
};

