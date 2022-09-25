import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsDateType} from '../../../redux/state';





export const DialogItem = (props: DialogsDateType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}






