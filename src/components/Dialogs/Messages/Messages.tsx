import React from 'react';
import s from './Messages.module.css';


type MessagesItemType = {
  id:number
  message: string
}



export const Messages = (props: MessagesItemType) => {
  return (
    <div className={s.message}>{props.message}</div>)
}




