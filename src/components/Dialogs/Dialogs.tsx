import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';


type DialogsType = {}


let dialogsDate=[
  {id:1, name:'Robert'},
  {id:2, name:'Andrzej'},
  {id:3, name:'Pawel'},
  {id:4, name:'Marek'},
  {id:5, name:'Barbara'},
  {id:6, name:'Jack'}
]
let messagesDate=[
  {id:1, message:'Hi'},
  {id:2, message:'How are you going?'},
  {id:3, message:'I am fine'}

]

export const Dialogs = (props: DialogsType) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsDate.map(d=> <DialogsItem
            key={d.id}
            id={d.id}
            name={d.name}/>)}
        </div>
        <div className={s.messages}>
          {messagesDate.map(m=><Messages key={m.id} id={m.id} message={m.message}/>)}
        </div>
      </div>

    </div>
  );
};

