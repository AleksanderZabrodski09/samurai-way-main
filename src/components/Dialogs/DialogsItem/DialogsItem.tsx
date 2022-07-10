import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsItemType} from '../../../redux/state';







export const DialogsItem = (props: DialogsItemType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAlyXYTXH5ml78ntQfe1hphtYK0XWRmQcmw&usqp=CAU" alt=""/>
      </div>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>)
}





