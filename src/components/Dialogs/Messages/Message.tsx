import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesDateType} from '../../../redux/state';




export const Message = (props: MessagesDateType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}






