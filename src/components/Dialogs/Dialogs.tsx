import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsType ={
  dialogsDate:DialogsDateType[]
  messageDate:MessageDateType[]
}

type DialogItemType = {
  name: string
  id: number
}
type MessageType = {
  id: number
  message: string
}
const DialogItem = (props: DialogItemType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}
const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

type DialogsDateType = {
  id: number
  name: string
}
type MessageDateType = {
  id: number
  sage: string
}

let dialogsDate = [
  {id: 1, name: 'Robert'},
  {id: 2, name: 'Andrzej'},
  {id: 3, name: 'Pawel'},
  {id: 4, name: 'Marek'},
  {id: 5, name: 'Barbara'},
  {id: 6, name: 'Jack'}
]
let messageDate = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you going?'},
  {id: 3, message: 'I am fine'},
  {id: 4, message: 'I am Ok'},
  {id: 5, message: 'I am great!'},
]


export const Dialogs = (props: DialogsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogsDate.map((el)=> <DialogItem key={el.id} id={el.id} name={el.name}/>)
        }

      </div>
      <div className={s.messages}>
        {messageDate.map(m=><Message key={m.id} id={m.id} message={m.message}/>)}

      </div>
    </div>

  );
};

