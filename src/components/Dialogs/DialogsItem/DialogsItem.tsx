import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsDateType} from '../../../redux/state';




export const DialogItem = (props: DialogsDateType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAlyXYTXH5ml78ntQfe1hphtYK0XWRmQcmw&usqp=CAU" alt=""/>
        {props.name}
      </NavLink>
    </div>
  )
}






