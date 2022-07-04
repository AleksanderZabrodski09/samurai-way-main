import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


type DialogsType = {}

type DialogsItemType = {
  id: number
  name: string
}
type MessagesType = {
  message: string
}

const DialogsItem = (props: DialogsItemType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>)
}

const Messages = (props: MessagesType) => {
  return (
    <div className={s.message}>{props.message}</div>)
}

export const Dialogs = (props: DialogsType) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogsItem id={1} name='Robert'/>
          <DialogsItem id={2} name='Andrzej'/>
          <DialogsItem id={3} name='Pawel'/>
          <DialogsItem id={4} name='Marek'/>
          <DialogsItem id={5} name='Barbara'/>
          <DialogsItem id={6} name='Jack'/>
        </div>
      </div>
      <div className={s.messages}>
        <Messages message={'Hi'}/>
        <Messages message={'How are you going?'}/>
        <Messages message={'I am fine'}/>
      </div>
    </div>
  );
};

