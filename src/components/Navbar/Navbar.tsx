import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {FriendsNav} from './FriendsNav/FriendsNav';
import {FriendsNavType} from '../../redux/state'

// export type FriendsType={
//   id:number
//   name:string
// }
// type NavbarPropsType = {
//   friends: FriendsType[]
// }

// let friends :[
//   {id: 1, name: 'Robert'},
//   {id: 2, name: 'Barbara'},
//   {id: 2, name: 'Lena'}
// ]

export const Navbar = (props: FriendsNavType) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.active}><h2>Friends</h2></NavLink>
        <FriendsNav friends={props.friends}/>
      </div>
    </nav>
  )
}