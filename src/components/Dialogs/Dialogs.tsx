import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Message';
import {DialogsDateType, MessagesDateType} from '../../index';



type PropsType = {
  dialogs:DialogsDateType[]
  messages:MessagesDateType[]
}

// type DialogsType = {
//   dialogsDate: DialogsDateType[]
//   messageDate: MessageDateType[]
// }
//
// type DialogsDateType = {
//   id: number
//   name: string
// }
// let dialogsDate = [
//   {id: 1, name: 'Robert'},
//   {id: 2, name: 'Andrzej'},
//   {id: 3, name: 'Pawel'},
//   {id: 4, name: 'Marek'},
//   {id: 5, name: 'Barbara'},
//   {id: 6, name: 'Jack'}
// ]
//
// type MessageDateType = {
//   id: number
//   sage: string
// }
//
//
// let messageDate = [
//   {id: 1, message: 'Hi'},
//   {id: 2, message: 'How are you going?'},
//   {id: 3, message: 'I am fine'},
//   {id: 4, message: 'I am Ok'},
//   {id: 5, message: 'I am great!'},
// ]


export const Dialogs = (props: PropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          props.dialogs.map((el) => <DialogItem key={el.id} id={el.id} name={el.name}/>)
        }
      </div>
      <div className={s.messages}>
        {
          props.messages.map((m) => <Message key={m.id} id={m.id} message={m.message}/>)
        }

      </div>
    </div>

  );
};

