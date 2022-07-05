import React from 'react';
import s from './../Dialogs.module.css';



type MessagesType = {
  id:number
  message: string
}



export const Messages = (props: MessagesType) => {
  return (
    <div className={s.message}>{props.message}</div>)
}




