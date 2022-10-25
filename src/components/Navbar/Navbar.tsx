import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {FriendsDateType} from '../../redux/state';
import {Friends} from '../Friends/Friends';

type PropsType = {
  friends: FriendsDateType[]
}
export const Navbar = (props: PropsType) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {/*  <NavLink to='/profile' className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>*/}
        {/*</div>*/}
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={`${s.item} `}>
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={`${s.item} ${s.friends}`}>
        <NavLink to='/friends' activeClassName={s.active}>
          <div className={s.titleFriends}>Friends</div>
        </NavLink>
          <Friends friends={props.friends}/>


      </div>
    </nav>
  );
}


